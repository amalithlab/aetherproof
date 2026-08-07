/**
 * AETHER Browser Provider Extension - Background Service Worker
 * Establishes local WebSocket connection (ws://localhost:7823) with AETHER IDE
 * Exposes standardized Agent Browser API to AETHER research agents.
 */

const IDE_WS_URL = "ws://127.0.0.1:7823";
let socket = null;
let reconnectTimer = null;
let keepAliveTimer = null;

function connectToIDE() {
  if (socket && (socket.readyState === WebSocket.CONNECTING || socket.readyState === WebSocket.OPEN)) {
    return;
  }

  try {
    socket = new WebSocket(IDE_WS_URL);

    socket.onopen = () => {
      console.log("[AETHER Extension] Connected to AETHER IDE at " + IDE_WS_URL);
      chrome.storage.local.set({ status: "connected", lastSeen: Date.now() });
      
      if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
      }

      // Heartbeat ping every 15s to keep MV3 Service Worker alive
      if (keepAliveTimer) clearInterval(keepAliveTimer);
      keepAliveTimer = setInterval(() => {
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify({ type: "PING", timestamp: Date.now() }));
        }
      }, 15000);

      // Send registration message
      socket.send(JSON.stringify({
        type: "REGISTER",
        role: "BROWSER_PROVIDER",
        capabilities: [
          "browser.search", "browser.navigate", "browser.openTab", "browser.readPage",
          "browser.extractContent", "browser.extractCitations", "browser.downloadPDF",
          "browser.readPDF", "browser.followCitation", "browser.captureScreenshot", "browser.closeTab"
        ]
      }));
    };

    socket.onmessage = async (event) => {
      try {
        const message = JSON.parse(event.data);
        if (message.type === "PONG") return;
        console.log("[AETHER Extension] Received request:", message);
        if (message.id && message.action) {
          const result = await handleBrowserApiRequest(message.action, message.args || {});
          socket.send(JSON.stringify({ id: message.id, action: message.action, result }));
        }
      } catch (err) {
        console.error("[AETHER Extension] Error handling message:", err);
      }
    };

    socket.onclose = () => {
      console.log("[AETHER Extension] Disconnected from AETHER IDE.");
      chrome.storage.local.set({ status: "disconnected" });
      if (keepAliveTimer) clearInterval(keepAliveTimer);
      keepAliveTimer = null;
      socket = null;
      scheduleReconnect();
    };

    socket.onerror = (err) => {
      console.warn("[AETHER Extension] WebSocket error:", err);
    };
  } catch (e) {
    socket = null;
    scheduleReconnect();
  }
}

function scheduleReconnect() {
  if (!reconnectTimer) {
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null;
      connectToIDE();
    }, 3000);
  }
}

// Listen for popup messages (e.g. manual reconnect)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'reconnect') {
    if (socket) {
      try { socket.close(); } catch(e) {}
    }
    connectToIDE();
    sendResponse({ status: 'reconnecting' });
  } else if (request.action === 'getStatus') {
    const isConnected = socket && socket.readyState === WebSocket.OPEN;
    sendResponse({ connected: isConnected });
  }
  return true;
});


// ── Agent Browser API Handlers ──

async function handleBrowserApiRequest(action, args) {
  switch (action) {
    case "browser.search": return await apiSearch(args.query, args.engineUrl);
    case "browser.navigate": return await apiNavigate(args.url);
    case "browser.openTab": return await apiOpenTab(args.url);
    case "browser.readPage": return await apiReadPage(args.tabId);
    case "browser.extractContent": return await apiExtractContent(args.tabId);
    case "browser.extractCitations": return await apiExtractCitations(args.tabId);
    case "browser.downloadPDF": return await apiDownloadPDF(args.url);
    case "browser.readPDF": return await apiReadPDF(args.tabId);
    case "browser.followCitation": return await apiFollowCitation(args.citationOrDoi);
    case "browser.captureScreenshot": return await apiCaptureScreenshot(args.tabId);
    case "browser.closeTab": return await apiCloseTab(args.tabId);
    default: return { error: `Unknown action '${action}'` };
  }
}

async function apiSearch(query, engineUrl = "https://google.com") {
  let url = engineUrl;
  if (!url.includes("%s")) {
    if (url.includes("google.com")) url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    else if (url.includes("bing.com")) url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    else if (url.includes("scholar.google.com")) url = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
    else if (url.includes("pubmed")) url = `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(query)}`;
    else if (url.includes("arxiv.org")) url = `https://arxiv.org/search/?query=${encodeURIComponent(query)}&searchtype=all`;
    else if (url.includes("semanticscholar.org")) url = `https://www.semanticscholar.org/search?q=${encodeURIComponent(query)}`;
    else if (url.includes("ieeexplore")) url = `https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=${encodeURIComponent(query)}`;
    else if (url.includes("dl.acm.org")) url = `https://dl.acm.org/action/doSearch?AllField=${encodeURIComponent(query)}`;
    else url = `${url.replace(/\/$/, '')}/search?q=${encodeURIComponent(query)}`;
  } else {
    url = url.replace("%s", encodeURIComponent(query));
  }

  const tab = await chrome.tabs.create({ url, active: false });
  await waitForTabLoad(tab.id);
  const content = await apiReadPage(tab.id);
  return { tabId: tab.id, url, ...content };
}

async function apiNavigate(url) {
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!activeTab) return apiOpenTab(url);
  await chrome.tabs.update(activeTab.id, { url });
  await waitForTabLoad(activeTab.id);
  return await apiReadPage(activeTab.id);
}

async function apiOpenTab(url) {
  const tab = await chrome.tabs.create({ url, active: true });
  await waitForTabLoad(tab.id);
  return { tabId: tab.id, url };
}

async function apiReadPage(tabId) {
  const targetId = tabId || (await getActiveTabId());
  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: targetId },
      func: () => ({
        title: document.title,
        url: window.location.href,
        text: document.body ? document.body.innerText.substring(0, 15000) : ""
      })
    });
    return results[0]?.result || { error: "Failed to read page" };
  } catch (e) {
    return { error: e.message };
  }
}

async function apiExtractContent(tabId) {
  const targetId = tabId || (await getActiveTabId());
  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: targetId },
      func: () => {
        const article = document.querySelector('article') || document.querySelector('main') || document.body;
        return {
          title: document.title,
          url: window.location.href,
          content: article ? article.innerText : ""
        };
      }
    });
    return results[0]?.result || { error: "Extraction failed" };
  } catch (e) {
    return { error: e.message };
  }
}

async function apiExtractCitations(tabId) {
  const targetId = tabId || (await getActiveTabId());
  try {
    const results = await chrome.scripting.executeScript({
      target: { tabId: targetId },
      func: () => {
        const citations = [];
        // Google Scholar pattern
        document.querySelectorAll('.gs_ri').forEach(el => {
          const titleEl = el.querySelector('.gs_rt a');
          const metaEl = el.querySelector('.gs_a');
          if (titleEl) {
            citations.push({
              title: titleEl.innerText,
              link: titleEl.href,
              authorsAndVenue: metaEl ? metaEl.innerText : ""
            });
          }
        });
        // PubMed pattern
        document.querySelectorAll('.docsum-content').forEach(el => {
          const titleEl = el.querySelector('.docsum-title');
          const citationEl = el.querySelector('.docsum-journal-citation');
          if (titleEl) {
            citations.push({
              title: titleEl.innerText.trim(),
              link: titleEl.href,
              authorsAndVenue: citationEl ? citationEl.innerText.trim() : ""
            });
          }
        });
        // Generic fallback: meta tags
        const doiMeta = document.querySelector('meta[name="citation_doi"]');
        const titleMeta = document.querySelector('meta[name="citation_title"]');
        if (citations.length === 0 && (titleMeta || doiMeta)) {
          citations.push({
            title: titleMeta ? titleMeta.content : document.title,
            doi: doiMeta ? doiMeta.content : "",
            link: window.location.href
          });
        }
        return { citations, count: citations.length };
      }
    });
    return results[0]?.result || { citations: [] };
  } catch (e) {
    return { error: e.message, citations: [] };
  }
}

async function apiDownloadPDF(url) {
  return new Promise((resolve) => {
    chrome.downloads.download({ url, saveAs: false }, (downloadId) => {
      if (chrome.runtime.lastError) {
        resolve({ error: chrome.runtime.lastError.message });
      } else {
        resolve({ downloadId, status: "started", url });
      }
    });
  });
}

async function apiReadPDF(tabId) {
  const content = await apiReadPage(tabId);
  return { pdfContent: content.text || "", url: content.url };
}

async function apiFollowCitation(citationOrDoi) {
  const url = citationOrDoi.startsWith("http")
    ? citationOrDoi
    : `https://doi.org/${encodeURIComponent(citationOrDoi)}`;
  return apiOpenTab(url);
}

async function apiCaptureScreenshot(tabId) {
  const targetId = tabId || (await getActiveTabId());
  try {
    const dataUrl = await chrome.tabs.captureVisibleTab(null, { format: "png" });
    return { screenshot: dataUrl };
  } catch (e) {
    return { error: e.message };
  }
}

async function apiCloseTab(tabId) {
  if (tabId) {
    await chrome.tabs.remove(tabId);
    return { success: true, tabId };
  }
  return { error: "No tabId provided" };
}

function waitForTabLoad(tabId) {
  return new Promise((resolve) => {
    const listener = (id, changeInfo) => {
      if (id === tabId && changeInfo.status === "complete") {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };
    chrome.tabs.onUpdated.addListener(listener);
  });
}

async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab?.id;
}

// Connect on worker startup
connectToIDE();

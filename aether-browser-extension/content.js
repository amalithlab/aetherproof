/**
 * AETHER Browser Provider Extension - Content Script
 * Runs in web pages to provide detailed DOM & academic citation extraction.
 */

console.log("[AETHER Extension] Content script loaded on " + window.location.href);

// Listen for direct messages from background service worker
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extractAcademicData") {
    sendResponse(getAcademicMetadata());
  } else if (request.action === "extractFullDOM") {
    sendResponse({
      title: document.title,
      url: window.location.href,
      html: document.documentElement.outerHTML.substring(0, 50000),
      text: document.body ? document.body.innerText : ""
    });
  }
  return true;
});

function getAcademicMetadata() {
  const meta = {};
  
  // Meta tags
  document.querySelectorAll('meta').forEach(el => {
    const name = el.getAttribute('name') || el.getAttribute('property');
    const content = el.getAttribute('content');
    if (name && content && name.startsWith('citation_')) {
      const key = name.replace('citation_', '');
      if (meta[key]) {
        if (Array.isArray(meta[key])) meta[key].push(content);
        else meta[key] = [meta[key], content];
      } else {
        meta[key] = content;
      }
    }
  });

  return {
    url: window.location.href,
    title: meta.title || document.title,
    authors: meta.author || [],
    publicationDate: meta.publication_date || meta.date || "",
    journal: meta.journal_title || meta.publisher || "",
    doi: meta.doi || "",
    pdfUrl: meta.pdf_url || "",
    abstract: meta.abstract || ""
  };
}

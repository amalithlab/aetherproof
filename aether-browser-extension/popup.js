document.addEventListener('DOMContentLoaded', () => {
  const statusDot = document.getElementById('status-dot');
  const statusText = document.getElementById('status-text');
  const infoText = document.getElementById('info-text');
  const reconnectBtn = document.getElementById('reconnect-btn');

  function updateUI() {
    chrome.storage.local.get(['status', 'lastSeen'], (data) => {
      if (data.status === 'connected') {
        statusDot.className = 'dot connected';
        statusText.textContent = 'Connected to IDE';
        statusText.style.color = '#4cd964';
        infoText.textContent = 'Ready to execute browser research agents.';
      } else {
        statusDot.className = 'dot disconnected';
        statusText.textContent = 'Disconnected';
        statusText.style.color = '#ff3b30';
        infoText.textContent = 'Ensure AETHER IDE is running on port 7823.';
      }
    });
  }

  updateUI();
  setInterval(updateUI, 1000);

  if (reconnectBtn) {
    reconnectBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'reconnect' });
      statusText.textContent = 'Reconnecting...';
      setTimeout(updateUI, 1500);
    });
  }
});

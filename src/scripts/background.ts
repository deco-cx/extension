console.log("Hello from background script!");

/**
 * Handle scheduled alarm.
 */
function handleAlarm(alarm) {
  // Update icon
  // NOTE: There is a bug with setIcon() not working in a service worker context unless an absolute
  // path is used: https://bugs.chromium.org/p/chromium/issues/detail?id=1262029
  chrome.action.setIcon({
    path: {
      "16": "/images/icon-off.png",
      "24": "/images/icon-off.png",
      "32": "/images/icon-off.png",
    },
  });
}

/**
 * Handle data sent via chrome.runtime.sendMessage().
 * @param message Object - data sent in the message (request)
 * @param sender Object - origin of the message
 * @param sendResponse Function - method to call when completed
 */
function handleMessage(message, sender, sendResponse) {
  switch (message.request) {
    case "setTimestamp":
      // NOTE: We cannot use async onMessage because of this Chrome bug:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1185241
      // (also see https://stackoverflow.com/q/71216212/452587)
      (async () => {
        await chrome.storage.local.set(message.data);
        console.log("storage.local.set", message.data);
        sendResponse({
          status: chrome.runtime.lastError ? "error" : "ok",
        });
      })();
      break;
    case "updateIcon":
      // Schedule alarm to update icon 1 minute from now
      // NOTE: setTimeout() doesn't work in service workers, so we need to use the Alarms API.
      chrome.alarms.create({ delayInMinutes: 1 });
      console.log("Icon will be updated in one minute");
      break;
    default:
      sendResponse(null);
  }
  // Use sendResponse() asynchronously (keep messaging channel open)
  return true;
}

/**
 * REGISTER EVENT LISTENERS
 */

// Scheduled alarms
chrome.alarms.onAlarm.addListener(handleAlarm);

// One-time requests from options page, content script, and popup
chrome.runtime.onMessage.addListener(handleMessage);

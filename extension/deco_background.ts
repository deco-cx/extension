chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tabs.onUpdated", tabId, changeInfo, tab);
  chrome.tabs.sendMessage(tabId, "check_deco_site", (response) => {
    console.log("response", response);

    // change tab icon to green
    console.log(
      "chrome.action",
      chrome.action,
    );
    chrome.action.setIcon({
      path: {
        16: "icons/deco-16.png",
        32: "icons/deco-32.png",
        48: "icons/deco-48.png",
        128: "icons/deco-128.png",
      },
    });
  });
});

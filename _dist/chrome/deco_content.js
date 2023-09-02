// extension/deco_content.ts
console.log("hello from deco extension");
chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message == "check_deco_site") {
      const decoSite = document.querySelector("meta[name='deco-site']");
      console.log("deco-site", decoSite);
      sendResponse(decoSite?.getAttribute("content"));
    }
  }
);

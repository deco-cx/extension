/// <reference lib="dom" />
import { browser } from "../deps.ts";

console.log("hello from deco extension");

browser.default.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (message == "check_deco_site") {
      const decoSite = document.querySelector("meta[name='deco-site']");
      if (decoSite) {
        console.log("deco-site", decoSite);
        sendResponse(decoSite.getAttribute("content"));
      }
    }
  },
);

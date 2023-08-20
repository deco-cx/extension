import { browser } from "../deps.ts";

browser.default.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tabs.onUpdated", tabId, changeInfo, tab);
  browser.default.tabs.sendMessage(tabId, "check_deco_site");
});

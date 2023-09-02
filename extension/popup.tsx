/* @jsx h */
import { h, render } from "../deps.ts";
import OptionsButton from "../components/options_button.tsx";

const mountPoint = document.getElementById("mount");

const detectDecoSite = (tab: chrome.tabs.Tab) => {
  return tab.url?.includes("deco.cx");
};

const setIcon = (active: boolean, tab: chrome.tabs.Tab) => {
  chrome.action.setIcon({
    path: {
      "16": `icons/16${active ? "" : "-g"}.png`,
      "32": `icons/32${active ? "" : "-g"}.png`,
      "48": `icons/48${active ? "" : "-g"}.png`,
      "128": `icons/128${active ? "" : "-g"}.png`,
    },
    tabId: tab.id,
  });
};

chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
  const tab = tabs[0];
  const isDeco = detectDecoSite(tab);
  if (isDeco) {
    console.log("deco.cx site detected!");
    setIcon(true, tab);
  } else {
    setIcon(false, tab);
  }

  if (mountPoint) {
    render(
      <main>
        <h1>deco.cx {isDeco && "DETECTED!"}</h1>
        <span>{!isDeco && "not detected"}</span>
        <OptionsButton />
      </main>,
      mountPoint,
    );
  }
});

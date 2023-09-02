/* @jsx h */
import { h, useCallback } from "../deps.ts";

export default function OptionsButton() {
  const onClick = useCallback(() => {
    chrome.runtime.openOptionsPage();
  }, []);

  return (
    <button onClick={onClick}>
      Options
    </button>
  );
}

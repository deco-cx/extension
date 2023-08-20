/* @jsx h */
import { browser, h, useCallback } from "../deps.ts";

export default function OptionsButton() {
  const onClick = useCallback(() => {
    browser.default.runtime.openOptionsPage();
  }, []);

  return (
    <button onClick={onClick}>
      Options
    </button>
  );
}

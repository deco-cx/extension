/* @jsx h */
import { h, render } from "../deps.ts";
import OptionsButton from "../components/options_button.tsx";

const mountPoint = document.getElementById("mount");

if (mountPoint) {
  render(
    <main>
      <h1>deco.cx assistant</h1>
      <span>this site:</span>
      <OptionsButton />
    </main>,
    mountPoint,
  );
}

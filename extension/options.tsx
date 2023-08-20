/* @jsx h */
import { h, render } from "../deps.ts";

import Header from "../components/header.tsx";
import Home from "../components/home.tsx";

const mountPoint = document.getElementById("mount");

if (mountPoint) {
  render(
    <App />,
    mountPoint,
  );
}

function App() {
  return (
    <main>
      <Header title="deco.cx browser extension" />
      <Home default path="/home" />
    </main>
  );
}

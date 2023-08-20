/* @jsx h */
import { h } from "../deps.ts";

export default function Header(props: { title: string }) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

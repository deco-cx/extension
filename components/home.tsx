/* @jsx h */
import { h, useCallback, useEffect, useState } from "../deps.ts";

import {
  addStorageListener,
  getStorage,
  updateStorage,
} from "../utils/storage_helpers.ts";

export interface HomeProps {
  default?: boolean;
  path?: string;
}

export default function Home(props: HomeProps) {
  const [display, setDisplay] = useState<string>("");
  const [inputData, setInputData] = useState<string>("");

  useEffect(() => {
    getStorage().then(setDisplay);
    return addStorageListener(setDisplay);
  }, [setDisplay]);

  return (
    <div>
      <h1>deco.cx</h1>
      <h3>Stored String: {display}</h3>
      <input
        placeholder={display}
        onChange={useCallback((e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            setInputData(e.target.value);
          }
        }, [setInputData])}
      />
      <button
        onClick={useCallback(() => updateStorage(inputData), [inputData])}
      >
        Update
      </button>
    </div>
  );
}

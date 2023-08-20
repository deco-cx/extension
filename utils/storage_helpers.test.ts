import { asserts, browser, mock } from "../deps.ts";

import { getStorage } from "./storage_helpers.ts";

Deno.test("getStorage", async () => {
  const getStorageStub = mock.stub(browser.default.storage.sync, "get", () => {
    return Promise.resolve({ storage_key: "mock_storage_value" });
  });

  asserts.assertStrictEquals(await getStorage(), "mock_storage_value");
  mock.assertSpyCalls(getStorageStub, 1);

  // Expect `chrome.sync.storage.get` to be called with the storage_key
  mock.assertSpyCall(getStorageStub, 0, { args: ["storage_key"] });
  getStorageStub.restore();
});

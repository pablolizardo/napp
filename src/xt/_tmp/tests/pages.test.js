import { getPagesInFolder } from "../../server-actions/pages";

test("get all pages in folder", async () => {
  const pages = await getPagesInFolder();
  expect(Array.isArray(pages)).toBe(true);
});

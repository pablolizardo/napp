import { getPagesInFolder } from "../pages";

test("get all pages in folder", async () => {
  const pages = await getPagesInFolder();
  expect(Array.isArray(pages)).toBe(true);
});

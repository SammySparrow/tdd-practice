import { caeserCipher } from "./script.js";

test("abc => def", () => {
  expect(caeserCipher("abc")).toBe("def");
});

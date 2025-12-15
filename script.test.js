import { capitalise } from "./script.js";

test("hello to Hello", () => {
  expect(capitalise("hello")).toBe("Hello");
});

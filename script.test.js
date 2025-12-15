import { reverseString } from "./script.js";

test("Hello to olleH", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

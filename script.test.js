import { reverseString } from "./script.js";

test("Hello to olleH", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Symbols", () => {
  expect(reverseString("Get! Up! Get! Down?")).toBe("?nwoD !teG !pU !teG");
});

test("Numbers", () => {
  expect(reverseString("123456789")).toBe("987654321");
});

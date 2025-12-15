import { capitalise } from "./script.js";

test("All lower case", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test("All upper case", () => {
  expect(capitalise("UPPER")).toBe("Upper");
});

test("Mixed upper and lower", () => {
  expect(capitalise("MiXeD")).toBe("Mixed");
});

test("Symbols", () => {
  expect(capitalise("it's working?")).toBe("It's working?");
});

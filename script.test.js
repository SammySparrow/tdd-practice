import { calc } from "./script.js";

test("Add 1 + 1", () => {
  expect(calc.add(1, 1)).toBe(2);
});

test("Negative number", () => {
  expect(calc.add(-55, 66)).toBe(11);
});

test("Two negative numbers", () => {
  expect(calc.add(-652, -632)).toBe(-1284);
});

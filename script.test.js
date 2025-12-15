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

test("Subtract 55 - 44", () => {
  expect(calc.subtract(55, 44)).toBe(11);
});

test("Subtract negative number", () => {
  expect(calc.subtract(-32, 12)).toBe(-44);
});

test("Subtract two negative numbers", () => {
  expect(calc.subtract(-34, -45)).toBe(11);
});

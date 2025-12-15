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

test("Multiply positive numbers", () => {
  expect(calc.multiply(3, 12)).toBe(36);
});

test("Multiply one negative number", () => {
  expect(calc.multiply(-6, 5)).toBe(-30);
});

test("Multiply two negatives", () => {
  expect(calc.multiply(-7, -8)).toBe(56);
});

test("Divide positive numbers", () => {
  expect(calc.divide(8, 2)).toBe(4);
});

test("Divide by 0", () => {
  expect(calc.divide(7, 0)).toBeUndefined();
});

test("Divide by negative number", () => {
  expect(calc.divide(-6, 8)).toBe(-0.75);
});

test("Divide two negatives", () => {
  expect(calc.divide(-9, -8)).toBe(1.125);
});

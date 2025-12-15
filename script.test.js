import { analyzeArray } from "./script.js";

test("Average 2.5, min 1, max 4, length 4", () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test("Large range", () => {
  expect(analyzeArray([2384, 2, 284, 18492])).toEqual({
    average: 5290.5,
    min: 2,
    max: 18492,
    length: 4,
  });
});

test("Large length", () => {
  expect(
    analyzeArray([
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
      170, 180,
    ])
  ).toEqual({
    average: 95,
    min: 10,
    max: 180,
    length: 18,
  });
});

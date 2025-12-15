import { analyzeArray } from "./script.js";

test("Average 2.5, min 1, max 4, length 4", () => {
  expect(analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

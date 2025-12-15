import { caeserCipher } from "./script.js";

test("abc => def", () => {
  expect(caeserCipher("abc")).toBe("def");
});

test("xyz => abc", () => {
  expect(caeserCipher("xyz")).toBe("abc");
});

test("Uppercase wrapping: XYZ => ABC", () => {
  expect(caeserCipher("XYZ")).toBe("ABC");
});

test("Mixed upper and lower case: HeLLo => KhOOr", () => {
  expect(caeserCipher("HeLLo")).toBe("KhOOr");
});

test("Punctuation: Hello, World! => Khoor, Zruog!", () => {
  expect(caeserCipher("Hello, World!")).toBe("Khoor, Zruog!");
});

test("Shift increased by 3: abc => ghi", () => {
  expect(caeserCipher("abc", 6)).toBe("ghi");
});

test("Shift increase and wrapping: xyz => def", () => {
  expect(caeserCipher("xyz", 6)).toBe("def");
});

test("Shift over 26", () => {
  expect(() => caeserCipher("a", 50)).toThrow();
});

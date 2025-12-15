export { capitalise, reverseString, calc, caeserCipher };

function capitalise(str) {
  const i = str.slice(0, 1).toUpperCase();
  const j = str.slice(1).toLowerCase();
  return i.concat("", j);
}

function reverseString(str) {
  let temp = [];
  let i = -1;
  while (temp.length < str.length) {
    temp.push(str.at(i));
    i--;
  }
  return temp.join("");
}

class Calculator {
  add(nOne, nTwo) {
    return nOne + nTwo;
  }
  subtract(nOne, nTwo) {
    return nOne - nTwo;
  }
  divide(nOne, nTwo) {
    if (nOne === 0 || nTwo === 0) {
      return undefined;
    }
    return nOne / nTwo;
  }
  multiply(nOne, nTwo) {
    return nOne * nTwo;
  }
}
const calc = new Calculator();

function caeserCipher(str, shift = 3) {
  if (shift > 26) throw new Error("Keep shift value under 26");
  let arr = [];
  let i = 0;
  while (arr.length < str.length) {
    let code = str.codePointAt(i) + shift;
    if (/[a-z]/.test(str.at(i))) {
      code > 122
        ? arr.push(String.fromCodePoint(96 + (code - 122)))
        : arr.push(String.fromCodePoint(code));
    } else if (/[A-Z]/.test(str.at(i))) {
      code > 90
        ? arr.push(String.fromCodePoint(64 + (code - 90)))
        : arr.push(String.fromCodePoint(code));
    } else {
      arr.push(str.at(i));
    }
    i++;
  }
  return arr.join("");
}

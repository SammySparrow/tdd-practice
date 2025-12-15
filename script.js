export { capitalise, reverseString, calc };

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

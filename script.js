export { capitalise, reverseString };

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

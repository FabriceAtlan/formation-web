array = [6, 2, 1, 8, 10];
console.log(sumArray(array));

function sumArray(array) {
  const min = array.reduce((acc, val, id) => Math.min(acc, val), Infinity);
  const max = array.reduce((acc, val, id) => Math.max(acc, val), -Infinity);
  console.log(min, max);
}
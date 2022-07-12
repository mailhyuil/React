/* const arrays = Array(1000 * 1000);
console.log(arrays);

let start1 = new Date();
const new_array1 = [];
for (let i = 0; i < arrays.length; i++) {
  new_array1[i] = arrays[i];
}
console.log(new_array1, new Date() - start1, "ms");

const start2 = new Date();
const new_array2 = [...arrays];
console.log(new_array2, new Date() - start2, "ms");

const start3 = new Date();
const new_array3 = arrays.slice();
console.log(new_array3, new Date() - start3, "ms"); */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum1 = numbers.reduce((a, b, c, d) => {
  return a + b;
});

console.log("sum1 =", sum1);

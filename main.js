//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(5, 10, 15));

//Write a function that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
function sumNumbers(...arguments) {
  return arguments
    .filter((arguments) => typeof arguments === "number" && !isNaN(arguments))
    .reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbers(2, "4", 6, 8, "10"));

//Write a function that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
function concatArrays(array1, array2) {
  return [...array1, ...array2];
}
const array1 = [1, 3, 7];
const array2 = [2, 4, 10];

const concatArray = concatArrays(array1, array2);
console.log(concatArray);

//Write a function that takes in any amount of arguments, and returns the sum of every other argument
function sumEveryOther(...args) {
  return args
    .filter((_, index) => index % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}

const result = sumEveryOther(1, 2, 3, 4, 5, 6);
console.log(result); // Output: 1 + 3 + 5 = 9

//Write a function that can take in any number of arguments, and returns an array of only the unique arguments.
function uniqueArguments(...args) {
  return [...new Set(args)];
}

const uniqueArray = uniqueArguments(1, 2, 3, 2, 4, 5, 1, 6);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

//Write a function that takes in any number of arrays as arguments and combines all of them into one array.
function combineArrays(...arrays) {
  return [].concat(...arrays);
}

const arrayNum = [1, 2, 3];
const arrayStr = ["a", "b", "c"];
const arrayBool = [true, false];

const combinedArray = combineArrays(arrayNum, arrayStr, arrayBool);
console.log(combinedArray);

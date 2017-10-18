/*
Given an array of numbers, find the largest consecutive sum:

Examples:

[1, 2, 3, 4] = 10;

[1, -2, 4, 5] = 9

[5, -2, 3, 4] = 10

[-3, -4, -6, -1, -1, -3, -1] = 6

*/

//not a working implementation

const largestSum = (array) => {
  let result = 0;
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];

    if (result < currentSum) {
      result = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return result
}

console.log(largestSum([-3, -4, -6, -1, -1, -3, -1]))


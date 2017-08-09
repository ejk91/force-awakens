/*
Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

https://leetcode.com/problems/summary-ranges/description/
*/

// assuming the array is already sorted;


const summaryRanges = (array) => {
  const results = [];
  const arrow = '->';
  let start = array[0]

  // we want to iterate over the array
  // keep track start of range
  // see if next number is consecutive
  // when it is not we want to push the range (string) into the results array

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1] + 1) {
      let bucket = start + arrow + array[i - 1];
      results.push(bucket);
      start = array[i];
    }

    if (!array[i + 1]) {
      if (start === array[i]) {
        results.push(start.toString());
      } else {
      let bucket = start + arrow + array[i];
      results.push(bucket);
      }
    }
  }

  return results;
}

console.log(summaryRanges([0,1,2,4,5,7, 8, 9, 11]))
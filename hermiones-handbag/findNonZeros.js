/*
Question:
You are given an array of integers. Write an algorithm that brings all nonzero elements to the left of the array,
and returns the number of nonzero elements.
 
Condition:
The algorithm should operate in place, i.e. shouldn't create a new array.
The order of the nonzero elements does not matter. The numbers that remain in the right portion of the array can be anything

Example:
Given the array [ 1, 0, 2, 0, 0, 3, 4 ], a possible answer is [ 4, 1, 3, 2, ?, ?, ? ], 4 non-zero elements, 
where "?" can be any number. Code should have good complexity and minimize the number of writes to the array

input: Array
output: number of non-zero
condition: shouldnt create a new array - the order of nonzero elements does not matter
Edge Cases:

*/

var findNonZero = (array) => {
  let backCount = array.length - 1;
  let count = 0;
  
  for(let i =0; i < array.length; i++) {
    // if array[frontCount] === 0, we want to bring the zero to the end of the array
    // array[backCount] !==0, we want to bring the non zero number to the front of the array
    // we only want to swap in this case
    
    

    if (array[i] === 0 && array[backCount] !== 0 && i < backCount) {
      console.log(i);
      let temp = array[backCount];
      array[backCount] = array[i];
      array[i] = temp;
      backCount--;
      count++;
    }
  }
  

  console.log(array, count, backCount);
  
  // backCount decrements each time there is a swap (when we encounter a zero)
  // Since backCount
  return array.length - count;
}

console.log(findNonZero([ 1, 0, 2, 0, 0, 3, 4]));

/* 
How can we write onto the array the least amount of times?

var findNonZero = (array) => {
  let count = 0;
  let backCount = array.length - 1;
  
  for(let i =0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[count] = array[i];
      
      count++;
    }
  }
  
  let startIndex = count;
  
  while(startIndex < array.length) {
    array[startIndex] = '?';
    startIndex++;
  }
  
  return count;
}
*/



console.log(findNonZero([ 1, 0, 2, 0, 0, 3, 4, 5 ]));





const findNonZero = (array) => {
  // we want to have two pointers at the front and end of the array.
  let backCount = array.length - 1;
  let count = 0;
  
  for(let i = 0; i < array.length; i++) {
    // if array[i] is a non-zero element, we want to leave it as is (since it is already at the front) and increment our count
    if (array[i] !== 0) {
      count++;
    } else {
      // else if array[i] is a zero then we know we want to move it to the back
      // we want to do a swap only if the array[backCount] is a non zero element
        // once found, we initiate the swap.
      if (array[backCount] === 0) {
        while(array[backCount] === 0) { // we want to find the first non zero element iterating backwards
        
        // we added this if/else statement to stop unnecessary swaps after the array is sorted
          if (backCount > i) { // stop if the pointer equal or pass each other
            backCount--;
          } else { // break out of our for loop
            i = array.length;
            break;
          }
        }
        if (backCount > i) { // Once we found our first non-zero element, we want to initiate our swap only and increment our count only if the pointers did not pass each other
         swapHelper(array, i, backCount);
         count++;
        }
      } else { // if array[backCount] is already a non zero element, then proceed with the swap and increment our count
        swapHelper(array, i, backCount);
        count++;
      }
    }
    
  }
  // return our count of non-zero elements
  return count;
}

// helper function for the swap
const swapHelper = (array, i, j) => {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

console.log(findNonZero([ 1, 0, 2, 0, 0, 3, 4, 0, 1, 0, 1, 9 ,10 ]));
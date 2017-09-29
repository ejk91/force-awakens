/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/

// const longestConsecutiveSequence = (array) => {
//   if (array.length === 0 || array === null) {
//     return 0;
//   }
//   const set = new Set(array);
//   let longestStreak = 1




//   for (let i = 0; i < array.length; i++) {
//     let currentStreak = 1
//     currentNum = array[i] + 1
//     while(set.has(currentNum)) {
//       currentStreak++;
//       currentNum++;
//     }

//     longestStreak = Math.max(longestStreak, currentStreak)
//   }

//   return longestStreak;

// }


const longestConsecutiveSequence = (array) => {

  if (array.length === 0) {
    return 0
  }
  // keep track of currentLength, longestLength and initiate a storage object

  let longestLength = 1;
  let currentLength = 1;
  let storageObject = {}; // keep track of what numbers we have visited to keep it in O(n) time

  //populate our storage array with input numbers
  for(let i = 0; i < array.length; i++) {
    storageObject[array[i]] = true;
  }
  // iterate through input array
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];

  // see if numbers below are present
    while(storageObject[currentNumber - 1]) {
    // if they are we want to mark it as already seen
    // increment current length
    currentLength++;
    storageObject[currentNumber - 1] = false;
    currentNumber--;
    }

    // reset current Number so we can go above
    currentNumber = array[i];
  // see if numbers above are present
    while(storageObject[currentNumber + 1]) {
    // if they are - mark it as visited
    // increment current length
    currentLength++;
    storageObject[currentNumber + 1] = false;
    currentNumber++;
    }
    
  // compare current Length with longest length
    longestLength = Math.max(currentLength, longestLength);
    // reset current length to one for next iteration
    currentLength = 1;
    
  }



  return longestLength;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2, 5, 8, 9, 6]))
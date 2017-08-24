/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/

const longestConsecutiveSequence = (array) => {
  if (array.length === 0 || array === null) {
    return 0;
  }
  const set = new Set(array);
  let longestStreak = 1




  for (let i = 0; i < array.length; i++) {
    let currentStreak = 1
    currentNum = array[i] + 1
    while(set.has(currentNum)) {
      currentStreak++;
      currentNum++;
    }

    longestStreak = Math.max(longestStreak, currentStreak)
  }

  return longestStreak;

}

let newSet = new Set()
newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);
newSet.add(4);
newSet.add(4);

console.log(newSet)
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2, 5, 8, 9]))
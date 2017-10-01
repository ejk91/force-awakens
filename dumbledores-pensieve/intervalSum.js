/*
Find sum of elements from given index interval (i,j) in constant time?
*/


const intervalSum = (numbers, i, j) => {
  //preparation in constant time
  let map = {};
  map[0] = 0;

  for (let k = 0; k <= numbers.length; k++) {
    map[k + 1] = numbers[k] + map[k];
  }

  console.log(map, map[j], map[i-1])


  return map[j + 1] - map[i];

}


let numbers = [3, 4, 2, 1, 2, -1, 4, 3]
console.log(intervalSum(numbers, 4, 7))
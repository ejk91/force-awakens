const findMedianSortedArrays = (arr1, arr2) => {
  const length = (arr1.length || 0) + (arr2.length || 0);
  let oddMedian;
  let evenMedian;


  if (length % 2) { // if it is an odd number
    oddMedian = Math.floor(length/2);
  } else {
    evenMedian = length / 2;
  }

  let middle = oddMedian || evenMedian;
  const sortedArray = mergeArrayUntil(arr1, arr2, middle)
  console.log(sortedArray)

  if (evenMedian) {
    return (sortedArray[evenMedian] + sortedArray[evenMedian - 1]) /2
  } else {
    return sortedArray[oddMedian];
  }
}

const mergeArrayUntil = (arr1, arr2, index) => {
  let counter = 0
  let num1 = 0;
  let num2 = 0;
  const sortedArray = [];

  while (num1 <= arr1.length && num2 <= arr2.length && sortedArray.length <= index) {
    if (arr1[num1] < arr2[num2]) {
      sortedArray.push(arr1[num1]);
      num1++;
    } else {
      sortedArray.push(arr2[num2]);
      num2++;
    }
  }
  return sortedArray;
}



// let nums1 = [1, 3]
// let nums2 = [2]
// console.log(findMedianSortedArrays(nums1, nums2));

let nums1 = []
let nums2 = [1]
console.log(findMedianSortedArrays(nums1, nums2));

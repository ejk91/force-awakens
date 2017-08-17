// Given two strings, write a method to decide if one is a permutation of the other

// Method 1: sort the strings and see if they are equal
// Method 2: us a hash map to keep track of count of each character

const isPermutation = (string1, string2) => {
  console.log(string1, string2);
  // If two strings have different lengths, they are not permutations
  if (string1.length !== string2.length) {
    return false;
  }
  let counted = {};
  // builds charcters of string1
  for(let i = 0; i < string1.length; i++) {
    counted[string1.charAt(i)] = counted[string1.charAt(i)] + 1 || 1;
  }
  // decrements for each charater in string2
  for (i = 0; i < string2.length; i++) {
    counted[string2.charAt(i)]--;
    console.log(counted)
    // if value goes less than zero, more characters in stirng 2
    if (counted[string2.charAt(i)] < 0 || counted[string2.charAt(i)] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(isPermutation('enoch1', 'enoche'))
const isPermutationOfPalindrom = (string) => {
  //we want to iterate through and count how many instances of each character there are

  // store characters in a hash map using ascii
  let hash = {};
  let distinct = 0;

  for(let i = 0; i < string.length; i++) {
    hash[string.charAt(i)] = hash[string.charAt(i)] + 1 || 1;
  }
  //iterate through store to see if palindrome

  for(let key in hash) {
    if (hash[key] % 2) {
      distinct++;
    } else {
      distinct--;
    }
  }

  // if we have more than one distict character - it cannot be palindrome
  // it is fine if we have negatives - means we have even number of characters
  return (distinct < 2)

}

console.log(isPermutationOfPalindrom('eeaas'))
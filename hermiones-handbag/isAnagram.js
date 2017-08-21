const isAnagram = (string1, string2) => {
  // two strings with different lengths cannot be anagrams
  if (string1.length !== string2.length) {
    return false
  }

  // create a hash map of character count of string 1
  const str1count = {}
  for(let i = 0; i < string1.length; i++) {
    str1count[string1.charAt(i)] = (str1count[string1.charAt(i)] ? str1count[string1.charAt(i)] + 1 : 1);
  }

  // iterate through second string and compare character count with first string

  for (i = 0; i < string2.length; i++) {
    if (!str1count[string2.charAt(i)]) { // undefined or zero
      return false;
    } else {
      str1count[string2.charAt(i)] -= 1;
    }
  }

  return true;
}


console.log(isAnagram('enoch', 'hcbne'))
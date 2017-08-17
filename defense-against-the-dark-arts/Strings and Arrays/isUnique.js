const isUnique = (string) => {
  // ask if input string is unicode or ascii
  // solution is for ascii - 128 character

  let visted = Array(128);

  // iterate through string 
  for (let i = 0; i < string.length; i++) {
  // first check if ascii value of character is true
    if(visted[string.charAt(i)]) {
    // if true; return false
      return false;
  // if is not true;
    } else {
    // set index to true;
      visted[string.charAt(i)] = true;
    }
  }
  // if we iterate over the whole string and did not see diplicate character
  return true
}

console.log(isUnique('kick'))



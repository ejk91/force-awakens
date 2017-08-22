const oneAway = (string1, string2) => {
  if (string1.length === string2.length) {
    return oneEditReplace(string1, string2)
  } else if (string1.length + 1 === string2.length) { // first string is shorter - insertion was made on first string
    return oneEditInsert(string1, string2)
  } else if (string1.length - 1 === string2.length) { // second string is shorter - deletion was made on the first string or insertion was made on the second string
    return oneEditInsert(string2, string1)
  }
}

// checking if we can insert a single character into string1 to make string 2
// example: aple to apple
const oneEditInsert = (string1, string2) => {
  let idx1 = 0; // string1 - shorter string
  let idx2 = 0; // string2 - longer string

  while(idx1 < string1.length && idx2 < string2.length) {
    if (string1.charAt(idx1) !== string2.charAt(idx2)) {

      if (idx1 !== idx2) { // the first time they dont equal the indices will be the same. Second mismatch means it is not one insert or deletion away
        return false;
      }
      idx2++ // increment index of longer string
    } else {
      // increment both indices
      idx1++;
      idx2++;
    }
  }
  return true;
}

const oneEditReplace = (string1, string2) => {
  let foundEdit = false;

  for(let i = 0; i < string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      if (foundEdit) {
        return false; // allows us to only find one edit
      }
      foundEdit = true;
    }
  }
  return true;
}

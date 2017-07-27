/*
Given a string, return a compressed string that has the respective letter 
and number of repeated characters.

Example:

stringCompress('aaaffskkaaggfg') -> 'a3f2s1k2a2g2f1g1'
stringCompress('Dolby') -> 'D1o1l1b1y1'
*/

let stringCompress = (string) => {

  let result = '';
  let currentLetter = string[0]
  let currentCount = 0;
  for(let i = 0; i < string.length; i++) {
    console.log('***', currentLetter, string[i]);
    if (currentLetter === string[i] && string[i] !== '') {
      currentCount++;
    } else {
      result += ('' + currentLetter + currentCount);
      currentLetter = string[i];
      currentCount = 1;
      if (i === string.length - 1) {
        result += ('' + currentLetter + currentCount);
      }
    }
  }

  return result;
}

console.log(stringCompress('asd'));
console.log(stringCompress('aaaffskkaaggfg'));



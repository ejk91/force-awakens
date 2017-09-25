/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

const letterCombinations = (string) => {
  let result = [];
  let temp = []; // stack to hold letter combination


  const toLetter = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  if (!string || string.length === 0) {
    return result;
  }

  const getString = (digits) => {
    // base case 
    if (digits.length === 0) {
      result.push(temp.join(''));
      return
    }

    let currentDigit = parseInt(digits.substring(0,1)) // grabs first digit
    let letters = toLetter[currentDigit] // letters of digit
    console.log(currentDigit, letters)

    for (let i = 0; i < letters.length; i++) {
      temp.push(letters.charAt(i));
      getString(digits.substring(1));
      temp.pop();
    }
  }

  getString(string)

  return result
  

}


console.log(letterCombinations('323'));


// You categorize strings into three types: good, bad, or mixed. If a string has 3 consecutive vowels or 5 consecutive consonants, or both, then it is categorized as bad. Otherwise it is categorized as good. Vowels in the English alphabet are ["a", "e", "i", "o", "u"] and all other letters are consonants.

// The string can also contain the character ?, which can be replaced by either a vowel or a consonant. This means that the string "?aa" can be bad if ? is a vowel or good if it is a consonant. This kind of string is categorized as mixed.

// Implement a function that takes a string s and returns its category: good, bad, or mixed.

// Example

// For s = "aeu", the output should be
// classifyStrings(s) = "bad";

// For s = "a?u", the output should be
// classifyStrings(s) = "mixed";

// For s = "aba", the output should be
// classifyStrings(s) = "good".


const vowel = {
  'a': true,
  'e': true,
  'i': true,
  'o': true,
  'u': true,
  
}


const classifyStrings = (string) => {
  let vowelCounter = 0; // 1 2 3
  let consonantCounter = 0; // 1
  let questionMark = false; // true
  
  
  
  
  for(let i = 0; i < string.length; i++) {
  // iterate through the string
    let char = string.charAt(i); //a ? u
    
    if (char !== '?') {
    
    if (vowelCounter > 0) {
      if (!vowel[char]) {
        vowelCounter = 0;
        consonantCounter = 0;
      }
    }
  // if vowel counter > 0 
    // check if current char is a vowel
      // true - contine
      // false - reset counters to zero
    
    if (consonantCounter > 0) {
     if (vowel[char]) {
        vowelCounter = 0;
        consonantCounter = 0;
     }
    }
      
    }
  // if consonant counter > 0
    // check if current char is a consonant
      // true - contine
      // false - reset counters to zero
  
  
  // if character is ?
  if (char === '?') {
    // increment vowel counter
    vowelCounter++;
    // increment consonant counter
    consonantCounter++;
    
    questionMark = true;
  }
  // if character is vowel
  if (vowel[char]) {
    // increment vowel counter
    vowelCounter++;
  }
  // if consonant 
  if (!vowel[char]) {
    // increment consonant counter
    consonantCounter++;
  }
    
  if (questionMark) {
    if (vowelCounter >= 3 || consonantCounter >=5) {
      return 'mixed';
    }
  }
  
    
  if (vowelCounter >= 3 || consonantCounter >= 5) {
    return 'bad'
  }
    
  }
  // if counter is greater > 3
    // return bad
  // if counter is greater > 5
      // return bad
  
  return 'good';
  
}

console.log(classifyStrings('a?u'));
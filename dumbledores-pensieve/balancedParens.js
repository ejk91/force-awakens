/*
Given a string with parentheses, return a string with balanced parentheses by 
removing the fewest characters possible. You cannot add anything to the string.. Examples:

balance("()") -> "()". 
balance(")(") -> ""
balance("(((((") -> ""
balance("(()()(") -> "()()"
balance(")(())(") -> "(())" 

balance(")(())(") != "()()



 */
var balancedParens = function(input) {
  let result = input.split('');
  let stack = []

  for (var i = 0; i < input.length; i++) {
    if(stack.length === 0 || input[i] === '(') {
      stack.push(i)
    } else {
      let topOfStack = stack[stack.length - 1];
      console.log(result[topOfStack])
      if (result[topOfStack] === ')') {
        stack.push(i);
      } else {
        let popped = stack.pop();
        //console.log(popped);
      }
    }
  }

  console.log(stack);

  while (stack.length) {
    result.splice(stack.pop(), 1);
  }


  return result.join('');

  // loop through the input and access each character
    // if character is equal to (
      // then we push it onto our stack
  // else if character is equal to )
   // we need to grab the top of the stack and check to make sure its equal to (
      // if that is true then we add the top of the stack and the current character to the result
      // if it is not then we do nothing


};
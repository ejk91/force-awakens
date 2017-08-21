/*
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?

I: string
O: reversed string
C: no extra space
E:
*/


const reverse = (string) => {
  // swap first char and last char etc

  let result = string.split(' ');
  let start = 0;
  let end = result.length - 1

  while (start <= end && end >= start) {
    let temp = result[start];
    result[start] = result[end];
    result[end] = temp;
    start++;
    end--;
  }

  return result.join(' ', ',');

}

console.log(reverse('I am one with the force, the force is with me'))
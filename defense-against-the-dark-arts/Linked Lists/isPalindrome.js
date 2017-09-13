const isPalindrome = (node) => {
  // Two pointers that move at different speeds
  // when fast hits the end we know that slow is at the middle
  let fast = node;
  let slow = node;

  let stack = []; //using an array to represent a stack;

  // move pointers until we reach the end and middle
  while (fast !== null && fast.next !== null) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  // if the linkedList is odd, we want to skip the middle element

  if (fast !== null) {
    slow = slow.next;
  }

  // Here we want to use the stack to check if the first half is equal to the second half

  while(slow !== null) {
    let topOfStack = stack.pop().value;

    if (topOfStack != slow.value) {
      return false;
    }

    slow = slow.next;
  }

  return true;

}
/*
Partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x
*/

const LinkedList = require('./linkedList.js');

console.log(LinkedList)

let enoch = new LinkedList();
console.log(enoch)

const partitionLinkedList = (list, val) => {
  let result = new LinkedList(list.value);
  let node = list;

  while(node !== null) {
    if (node.value < val) {
      // we want to add the the front of the list
      result.addHead(node.value);
    } else {
      // we want to add to the end of the list
      result.addTail(node.value);
    }

    node = node.next;
  }

  // at the end we want the tail to not have a next
  result.tail.next = null;

  return result;
}
const reverseLinkedList = () => {
  let currentNode = head;
  let prev = null; // will become the head of our reverse linked lit

  while(currentNode) {
    let temp = currentNode.next
    //point node to previous node
    currentNode.next = prev;
    //set previous to current node
    prev = currentNode;
    //set currentNode to previous node's next
    currentNode = temp;
  }

  return prev
}
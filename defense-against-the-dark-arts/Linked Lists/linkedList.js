module.exports = class LinkedList {
  constructor(value) {
    let node = this.createNode(value)
    this.list = node,
    this.head = node,
    this.tail = node
  }

  createNode(value) {
    let node = {
      value: value,
      next: null,
      prev: null
    };
    return node;
  }

  removeHead() {
    let oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  }

  removeTail() {
    let oldTail = this.tail;
    this.tail = this.tail.prev;
    return oldTail;
  }

  addTail(value) {
    let node = this.createNode(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    return this.tail;
  }

  addHead(value) {
    let node = this.createNode(value);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    return this.head;
  }
}





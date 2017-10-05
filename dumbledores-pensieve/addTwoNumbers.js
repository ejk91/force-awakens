/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let pointer1 = l1;
    let pointer2 = l2;
    let carry = false;
    let resultHead = null;
    let prevNode = null;
    
    while (pointer1 || pointer2) {
        let digit;
        if (!pointer1) {
            digit = pointer2.val;
        } else if (!pointer2) {
            digit = pointer1.val;
        } else {
            digit = pointer1.val + pointer2.val;
        }

        if (carry) {
            digit++;
            carry = false;
        }
        // if 10 or higher, subtract 10 from sum and set carry to true
        if (digit >= 10) {
            digit -= 10;
            carry = true;
        }
        // create a new node representing the digit
        const digitNode = new ListNode(digit);
        // if resultHead does not exist, set it to new node
        if (!resultHead) { resultHead = digitNode };
        // if prevNode exists, set prevNode.next to new node
        if (prevNode) { prevNode.next = digitNode };
        // set prevNode to newNode 
        prevNode = digitNode;
        // increment pointer
        if (pointer1) { pointer1 = pointer1.next; }
        if (pointer2) { pointer2 = pointer2.next; }
    }
    
    if (carry) {
        const digitNode = new ListNode(1);
        prevNode.next = digitNode;
    }
    

    
    return resultHead;
};


var reverseWords = function(str) {
    return str.split(' ').reverse().join(' ');
};

console.log(reverseWords('the sky is blue'))
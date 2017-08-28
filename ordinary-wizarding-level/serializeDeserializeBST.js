/*
Serialization is the process of converting a data structure or object into a sequence of bits so 
that it can be stored in a fileor memory buffer, or transmitted across a network connection link
 to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your 
serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized
 to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree

    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree.
You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. 
Your serialize and deserialize algorithms should be stateless.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

 // this is a classic DFS
const serialize = (treeNode) => {
  let result = [];
  let queue = [];
  queue.push(treeNode);

  const recurse = (node) => {
    // if there is none left in the queue just exit
    console.log(node.val)
    if (queue.length === 0) {
      return;
    }

    if (node === null) {
      result.push(null)
    } else {

    // add dequeue children
      result.push(node.val) // one goes to result // 2 goes to result // 3

      queue.push(node.left); // 2 // null // 4
      queue.push(node.right); // 3 // null // 5

      queue.shift();
      recurse(queue[0]);// recurse on 2 -- we want to add null null // recurse on 3
    }
  }

  recurse(treeNode);


  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */






function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let start = new TreeNode(1);
start.left = new TreeNode(2);
start.right = new TreeNode(3);
start.right.left = new TreeNode(4);
start.right.right = new TreeNode(5);

console.log(serialize(start))




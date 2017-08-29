
// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}

// Start at root node

// Increment our count
// check this.left

// check this.right


const findDepth = (root) => {
  let maxDepth = 0;
  // let currentDepth = 0;
  
  const recurse = (node, currentDepth) => { // 1
    currentDepth++;
    console.log('In recurse', node.val);

    if(!node) {
      return 
    }
    
    if (node.left) { // 2, 4
      recurse(node.left, currentDepth);
    }

    if(node.right) {
      recurse(node.right, currentDepth);
    }
    
    return maxDepth = Math.max(maxDepth, currentDepth);
  }
  
  recurse(root, 0);
  
  
  return maxDepth;
  
}



let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.right.right = new TreeNode(5);
tree.right.right.left = new TreeNode(6);

console.log(findDepth(tree));
// for a binary tree
// left right childs

const findPath = (tree, node1, node2) => {
  let firstNodeFound = false;
  let secondNodeFound = false;
  let path = [];

  const recurse = (node, node1, node2) => {
    if (!node) {
      return
    }

    if (firstNodeFound && secondNodeFound) {
      return
    }


    if (node.value === node1) {
      firstNodeFound = true;
      path.push(node)
    } 

    if(node.value === node2) {
      secondNodeFound = true;
      path.push(node)
    }

    if (firstNodeFound || secondNodeFound) {
      path.push(node);
      recurse(node.left);
      recurse(node.right);
    }
  }


}

class binaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let HeadNode = new binaryTreeNode('A');
HeadNode.left = new binaryTreeNode('B');
HeadNode.right = new binaryTreeNode('C');
HeadNode.left.left = new binaryTreeNode('D');
HeadNode.left.right = new binaryTreeNode('E');
HeadNode.left.left.left = new binaryTreeNode('H');
HeadNode.left.left.right = new binaryTreeNode('I');
HeadNode.left.right.left = new binaryTreeNode('J');
HeadNode.left.right.right = new binaryTreeNode('K');
HeadNode.right.left = new binaryTreeNode('F');
HeadNode.right.right = new binaryTreeNode('G');
HeadNode.right.left.left = new binaryTreeNode('L');
HeadNode.right.right.left = new binaryTreeNode('M');
HeadNode.right.right.right = new binaryTreeNode('N');


console.log(HeadNode)


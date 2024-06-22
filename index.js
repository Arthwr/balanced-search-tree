import BinaryTree from "./binarySearchTree.js";
import addElements from "./helpers/addElements.js";
import rArray from "./helpers/rArray.js";

// Create tree with N elements of random numbers in array
const array = rArray(70);
const tree = new BinaryTree(array);

// Confirm tree structure, is it balanced and if level order, pre order, in order and postorder correctly behave
tree.printTree();
console.log("Is tree balanced: ", tree.isBalanced());
console.log("Elements in level order: ", tree.levelOrder());
console.log("Elements in preorder: ", tree.preOrder());
console.log("Elements in inorder: ", tree.inOrder());
console.log("Elements in postorder: ", tree.postOrder());

// Unbalance tree by inserting N numbers of elements that are > 100;
addElements(array, 50, 100, 200, tree);
tree.printTree();

// Confirm that it is unbalanced
console.log("Is tree balanced: ", tree.isBalanced());

// Balance tree && cofirm that its balanced now && print elements
tree.rebalance();
console.log("Is tree balanced: ", tree.isBalanced());
tree.printTree();
console.log("Elements in level order: ", tree.levelOrder());
console.log("Elements in preorder: ", tree.preOrder());
console.log("Elements in inorder: ", tree.inOrder());
console.log("Elements in postorder: ", tree.postOrder());
import quickSort from "./helpers/quickSort.js";
import removeDuplicates from "./helpers/removeDuplicates.js";

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.sortedArray = quickSort(removeDuplicates(array));
    this.root = this.buildTree(this.sortedArray);
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;
    const rootIndex = Math.floor((start + end) / 2);
    const treeNode = new Node(array[rootIndex]);
    treeNode.left = this.buildTree(array, start, rootIndex - 1);
    treeNode.right = this.buildTree(array, rootIndex + 1, end);
    return treeNode;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  printTree(node = this.root, prefix = "", isLeft = true) {
    if (node === null) return;
    if (node.right !== null) {
      this.printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.printTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const myTree = new Tree(arr);
myTree.printTree();
myTree.insert(40);
myTree.insert(22);
myTree.printTree();

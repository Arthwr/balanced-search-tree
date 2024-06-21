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

  delete(value) {
    if (this.root === null) return null;

    let prevNode = null;
    let currentNode = this.root;

    // Traverse the tree to find node to be deleted and its parent
    while (currentNode !== null && currentNode.data !== value) {
      prevNode = currentNode;
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    // Node to deleted not found
    if (currentNode === null) return;

    // Case 1: Node with no children (leaf node)
    if (currentNode.right === null && currentNode.left === null) {
      if (currentNode === this.root) {
        this.root = null;
      } else if (prevNode.left === currentNode) {
        prevNode.left = null;
      } else {
        prevNode.right = null;
      }

      return;
    }

    // Case 2: Node with at least 1 child
    if (currentNode.left === null || currentNode.right === null) {
      const child =
        currentNode.left !== null ? currentNode.left : currentNode.right;
      if (currentNode === this.root) return (this.root = child);
      if (prevNode.left === currentNode) {
        prevNode.left = child;
      } else {
        prevNode.right = child;
      }

      return;
    }

    // Case 3: Node with two children
    // Find the in-order successor (smallest in the right subtree)
    let successor = currentNode.right;
    let successorParent = currentNode;

    while (successor.left !== null) {
      successorParent = successor;
      successor = successor.left;
    }

    // Replace current node's data with successor's data
    currentNode.data = successor.data;

    // Handle the case where successor has a right child
    if (successorParent.left === successor) {
      successorParent.left = successor.right;
    } else {
      successorParent.right = successor.right;
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

myTree.insert(44);
myTree.insert(20);
myTree.insert(14);
myTree.printTree();
myTree.delete(8);
myTree.printTree();

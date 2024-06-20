import quickSort from "./quickSort.js";
import removeDuplicates from "./removeDuplicates.js";
import prettyPrint from "./prettyPrint.js";

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const node = (data = null, left = null, right = null) => {
  return { data, left, right };
};

const buildTree = (array, start = 0, end = array.length - 1) => {
  if (start > end) return null;
  const rootIndex = Math.floor((start + end) / 2);
  const treeNode = node(array[rootIndex]);
  treeNode.left = buildTree(array, start, rootIndex - 1);
  treeNode.right = buildTree(array, rootIndex + 1, end);
  return treeNode;
};

const modifiedArray = quickSort(removeDuplicates(arr));
const resultTree = buildTree(modifiedArray);
console.log(resultTree);
prettyPrint(resultTree);

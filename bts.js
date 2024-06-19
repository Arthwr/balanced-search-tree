import quickSort from "./quickSort.js";
import removeDuplicates from "./removeDuplicates.js";

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const node = (value = null, left = null, right = null) => {
  return { value, left, right };
};

const tree = () => {
  let root = null;
  return { root };
};

const buildTree = (array) => {
  const uniqueSortedArr = removeDuplicates(quickSort(array));
};

export default function addElements(array, n, min, max, targetTree) {
  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    targetTree.insert(randomNum);
  }
}

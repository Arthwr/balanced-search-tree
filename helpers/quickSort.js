const partition = (array, pivot, right) => {
  let q = pivot;
  for (let j = pivot; j < right; j++) {
    if (array[j] <= array[right]) {
      [array[j], array[q]] = [array[q], array[j]];
      q++;
    }
  }
  [array[q], array[right]] = [array[right], array[q]];

  return q;
};

export default function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivot = partition(array, left, right);

    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
  return array;
}

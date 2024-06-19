export default function removeDuplicates(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}


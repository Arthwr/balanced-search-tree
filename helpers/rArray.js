export default function rArray(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  return array;
}

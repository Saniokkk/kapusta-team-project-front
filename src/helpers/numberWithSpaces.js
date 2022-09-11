export function makeNumberWithSpaces(sum) {
  return sum
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

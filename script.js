export function add(query) {
  if (typeof query !== "string" || query.length === 0) return 0;

  const numbers = query.split(",").map((num) => parseFloat(num));
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

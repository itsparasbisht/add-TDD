export function add(query) {
  if (typeof query !== "string" || query.length === 0) return 0;

  // replace new lines with commas
  const queryWithCommas = query.replace(/\n/g, ",");

  const numbers = queryWithCommas.split(",").map((num) => parseInt(num));

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

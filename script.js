export function add(query) {
  if (typeof query !== "string" || query.length === 0) return 0;

  let delimiter = ",";
  let numbersString = query;

  // Check if a custom delimiter is specified
  if (query.startsWith("//")) {
    const delimiterEndIndex = query.indexOf("\n");
    delimiter = query.substring(2, delimiterEndIndex);
    numbersString = query.substring(delimiterEndIndex + 1);
  }

  // replace new lines with commas
  const formattedQuery = numbersString.replace(/\n/g, delimiter);

  const numbers = formattedQuery.split(delimiter).map((num) => parseInt(num));

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

console.log(add("pojpjo"));

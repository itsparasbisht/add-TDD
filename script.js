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

  // replace new lines with delimiter characters
  const formattedQuery = numbersString.replace(/\n/g, delimiter);

  const numbers = formattedQuery
    .split(delimiter)
    .map((number) => parseInt(number))
    .filter((number) => !isNaN(number));

  // Check for negative numbers
  const negativeNumbers = numbers.filter((number) => number < 0);
  console.log(negativeNumbers);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

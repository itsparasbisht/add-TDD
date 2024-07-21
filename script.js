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

  // Split the string by the delimiter
  const numbersArr = formattedQuery.split(delimiter);

  // Convert to numbers, check for negative numbers, ignore numbers greater than 1000
  const numbers = [];
  const negativeNumbers = [];

  numbersArr.forEach((numStr) => {
    const num = parseInt(numStr);
    if (isNaN(num)) return;

    if (num < 0) {
      negativeNumbers.push(num);
    } else if (num <= 1000) {
      numbers.push(num);
    }
  });

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(", ")}`
    );
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

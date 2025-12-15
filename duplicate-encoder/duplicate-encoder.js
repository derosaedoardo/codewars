export function duplicateEncode(input) {
  // Convert input to lowercase and split into an array of characters
  const inputArray = input.toLowerCase().split("");

  // Count occurrences of each character
  const charCount = inputArray.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  // Build the result string based on character counts
  const result = inputArray
    .map((char) => (charCount[char] > 1 ? ")" : "("))
    .join("");

  return result;
}

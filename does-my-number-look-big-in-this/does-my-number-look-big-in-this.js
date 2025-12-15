export function narcissistic(value) {
  // Convert the number to a string, split into digits, and convert back to numbers
  const digits = String(value).split("").map(Number);

  // Calculate the power based on the number of digits
  const power = digits.length;

  // Calculate the sum of each digit raised to the power
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

  // Check if the sum equals the original value
  return sum === value;
}

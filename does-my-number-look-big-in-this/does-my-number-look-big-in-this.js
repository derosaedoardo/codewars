export function narcissistic(value) {
  const digits = String(value).split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
  return sum === value;
}

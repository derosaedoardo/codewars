export function digitalRoot(number) {
  while (number > 9) {
    /*
     *  Split the number into its digits, sum them up
     *  and assign the result back to number
     *  Repeat until number is a single digit
     */
    number = String(number)
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);
  }
  return number;
}

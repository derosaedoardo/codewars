function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((digit, index, arr) => {
      const zeros = arr.length - index - 1;
      return digit !== "0" ? digit + "0".repeat(zeros) : null;
    })
    .filter(Boolean)
    .join(" + ");
}

export { expandedForm };

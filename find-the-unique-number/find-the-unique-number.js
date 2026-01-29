function findUniq(arr) {
  return arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
}

export { findUniq };

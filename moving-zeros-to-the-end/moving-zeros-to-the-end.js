function moveZeros(arr) {
  const withoutZeros = arr.filter((el) => el !== 0);
  const zeroCount = arr.length - withoutZeros.length;
  return [...withoutZeros, ...Array(zeroCount).fill(0)];
}

export { moveZeros };

function deleteNth(arr, n) {
  const counts = new Map();

  return arr.filter((x) => {
    const next = (counts.get(x) ?? 0) + 1;
    counts.set(x, next);
    return next <= n;
  });
}

export { deleteNth };

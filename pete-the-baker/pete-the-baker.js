function cakes(recipe, available) {
  let max = Infinity;

  for (const [ingredient, needed] of Object.entries(recipe)) {
    const have = available[ingredient] ?? 0;
    max = Math.min(max, Math.floor(have / needed));
    if (max === 0) return 0;
  }

  return max;
}

export { cakes };

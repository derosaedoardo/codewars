function isPangram(string) {
  const letters = new Set(string.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
}

export { isPangram };

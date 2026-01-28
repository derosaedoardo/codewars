function toCamelCase(str) {
  const words = str.split(/[-_]/);

  return words
    .map((word, index) => {
      if (index === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

export { toCamelCase };

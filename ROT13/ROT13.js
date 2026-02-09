export const rot13 = (string) => {
  if (typeof string !== "string") return null;

  return string.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    const base = code <= 90 ? 65 : 97;
    return String.fromCharCode(((code - base + 13) % 26) + base);
  });
};

const weight = (s) => s.split("").reduce((sum, ch) => sum + Number(ch), 0);

function orderWeight(strng) {
  return strng
    .split(" ")
    .sort((a, b) => {
      const wa = weight(a);
      const wb = weight(b);
      if (wa !== wb) {
        return wa - wb;
      }
      return a.localeCompare(b);
    })
    .join(" ");
}

export { orderWeight };

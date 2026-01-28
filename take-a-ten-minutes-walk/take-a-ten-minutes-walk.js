function isValidWalk(walk) {
  let x = 0;
  let y = 0;

  if (walk.length !== 10) return false;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "e":
        x++;
        break;
      case "w":
        x--;
        break;
    }
  }

  return x === 0 && y === 0;
}

export { isValidWalk };

const ops = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  times: (a, b) => a * b,
  dividedBy: (a, b) => Math.floor(a / b),
};

const num = (n) => (op) => (op ? op(n) : n);

const op = (fn) => (b) => (a) => fn(a, b);

const zero = num(0);
const one = num(1);
const two = num(2);
const three = num(3);
const four = num(4);
const five = num(5);
const six = num(6);
const seven = num(7);
const eight = num(8);
const nine = num(9);

const plus = op(ops.plus);
const minus = op(ops.minus);
const times = op(ops.times);
const dividedBy = op(ops.dividedBy);

export {
  dividedBy,
  eight,
  five,
  four,
  minus,
  nine,
  one,
  plus,
  seven,
  six,
  three,
  times,
  two,
  zero,
};

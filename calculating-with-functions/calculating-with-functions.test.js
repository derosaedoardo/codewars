import { assert, config } from "chai";
import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} from "./calculating-with-functions.js";

config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times(five())), 35, "seven(times(five ()))");
    assert.strictEqual(four(plus(nine())), 13, "four (plus(nine ()))");
    assert.strictEqual(eight(minus(three())), 5, "eight(minus(three()))");
    assert.strictEqual(six(dividedBy(two())), 3, "six(dividedBy(two()))");
  });
});

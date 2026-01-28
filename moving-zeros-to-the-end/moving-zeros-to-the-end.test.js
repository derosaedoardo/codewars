import { assert, config } from "chai";
import { moveZeros } from "./moving-zeros-to-the-end.js";

config.truncateThreshold = 0;

describe("Moving Zeros To The End", () => {
  it("Basic examples", () => {
    assert.deepEqual(moveZeros([1, 0, 1, 2, 0, 1, 3]), [1, 1, 2, 1, 3, 0, 0]);
    assert.deepEqual(moveZeros([0, 0, 0]), [0, 0, 0]);
    assert.deepEqual(moveZeros([]), []);
  });

  it("Preserves order of non-zero elements", () => {
    assert.deepEqual(
      moveZeros([false, 1, 0, 2, 0, 1, 3, "a"]),
      [false, 1, 2, 1, 3, "a", 0, 0]
    );
  });

  it("Moves only numeric zeros", () => {
    assert.deepEqual(moveZeros([0, "0", 0, 0]), ["0", 0, 0, 0]);
    assert.deepEqual(moveZeros([0, null, 0, "0", 0, 5]), [null, "0", 5, 0, 0, 0]);
  });
});

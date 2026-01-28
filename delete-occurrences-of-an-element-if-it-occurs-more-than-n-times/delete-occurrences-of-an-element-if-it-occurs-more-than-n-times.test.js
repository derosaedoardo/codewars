import { assert, config } from "chai";
import { deleteNth } from "./delete-occurrences-of-an-element-if-it-occurs-more-than-n-times.js";

config.truncateThreshold = 0;

describe("Delete occurrences of an element if it occurs more than n times", () => {
  it("Basic examples", () => {
    assert.deepEqual(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
    assert.deepEqual(
      deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
      [1, 1, 3, 3, 7, 2, 2, 2]
    );
  });

  it("Handles empty arrays and n = 0", () => {
    assert.deepEqual(deleteNth([], 2), []);
    assert.deepEqual(deleteNth([1, 2, 3], 0), []);
  });

  it("Keeps at most n occurrences and preserves order", () => {
    assert.deepEqual(
      deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2),
      [1, 2, 3, 1, 2, 3]
    );
  });

  it("Works with zero values", () => {
    assert.deepEqual(deleteNth([0, 1, 0, 2, 0], 2), [0, 1, 0, 2]);
  });
});

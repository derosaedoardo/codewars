import { assert, config } from "chai";
import { isValidWalk } from "./take-a-ten-minutes-walk.js";

config.truncateThreshold = 0;

describe("Take a Ten Minutes Walk", () => {
  it("Returns true for a valid 10 minute walk", () => {
    assert.strictEqual(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      true
    );
  });

  it("Returns false when not exactly 10 minutes", () => {
    assert.strictEqual(isValidWalk(["n", "s"]), false);
    assert.strictEqual(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n"]),
      false
    );
  });

  it("Returns false when it does not return to start", () => {
    assert.strictEqual(
      isValidWalk(["n", "n", "n", "n", "n", "n", "s", "s", "s", "s"]),
      false
    );
    assert.strictEqual(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"]),
      false
    );
  });
});

import { assert, config } from "chai";
import { order } from "./your-order-please.js";

config.truncateThreshold = 0;

describe("Your order, please", () => {
  it("Basic examples", () => {
    assert.strictEqual(
      order("is2 Thi1s T4est 3a"),
      "Thi1s is2 3a T4est"
    );
    assert.strictEqual(
      order("4of Fo1r pe6ople g3ood th5e the2"),
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
    assert.strictEqual(order(""), "");
  });

  it("Handles single word", () => {
    assert.strictEqual(order("word1"), "word1");
  });
});

import { assert, config } from "chai";
import { orderWeight } from "./weight-for-weight.js";

config.truncateThreshold = 0;

describe("Weight for weight", () => {
  it("Sorts by weight then lexicographically", () => {
    assert.strictEqual(
      orderWeight("103 123 4444 99 2000"),
      "2000 103 123 4444 99"
    );
    assert.strictEqual(
      orderWeight("56 65 74 100 99 68 86 180 90"),
      "100 180 90 56 65 74 68 86 99"
    );
  });

  it("Handles equal weights with lexicographic order", () => {
    assert.strictEqual(orderWeight("180 90 99 100"), "100 180 90 99");
    assert.strictEqual(orderWeight("12 21 111 30"), "111 12 21 30");
  });

  it("Handles single and empty inputs", () => {
    assert.strictEqual(orderWeight(""), "");
    assert.strictEqual(orderWeight("2000"), "2000");
  });
});

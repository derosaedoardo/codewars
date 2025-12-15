import { assert, config } from "chai";
import { digitalRoot } from "./sum-of-digits-digital-root.js";

config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(digitalRoot(16), 7);
    assert.strictEqual(digitalRoot(456), 6);
  });
});

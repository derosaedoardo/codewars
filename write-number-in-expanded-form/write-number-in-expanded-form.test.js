import { assert, config } from "chai";
import { expandedForm } from "./write-number-in-expanded-form.js";

config.truncateThreshold = 0;

describe("Write Number in Expanded Form", () => {
  it("Basic examples", () => {
    assert.strictEqual(expandedForm(12), "10 + 2");
    assert.strictEqual(expandedForm(42), "40 + 2");
    assert.strictEqual(expandedForm(70304), "70000 + 300 + 4");
  });

  it("Handles numbers with zeros in the middle", () => {
    assert.strictEqual(expandedForm(90010), "90000 + 10");
  });

  it("Handles powers of ten", () => {
    assert.strictEqual(expandedForm(100), "100");
  });
});

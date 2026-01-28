import { assert, config } from "chai";
import { isPangram } from "./detect-pangram.js";

config.truncateThreshold = 0;

describe("Detect Pangram", () => {
  it("Basic examples", () => {
    assert.strictEqual(
      isPangram("The quick brown fox jumps over the lazy dog."),
      true
    );
    assert.strictEqual(
      isPangram("Cwm fjord bank glyphs vext quiz"),
      true
    );
  });

  it("Not pangrams", () => {
    assert.strictEqual(isPangram("This is not a pangram."), false);
    assert.strictEqual(isPangram("abcdefghijklmnopqrstuvwxyz"), true);
  });

  it("Ignores case, digits, and punctuation", () => {
    assert.strictEqual(
      isPangram("Five quacking Zephyrs jolt my wax bed 123!"),
      true
    );
  });
});

import { assert, config } from "chai";
import { toCamelCase } from "./convert-string-to-camel-case.js";

config.truncateThreshold = 0;

describe("Convert string to camel case", () => {
  it("Basic examples", () => {
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
    assert.strictEqual(
      toCamelCase("A-B-C"),
      "ABC"
    );
  });

  it("Preserves first word casing", () => {
    assert.strictEqual(toCamelCase("the-Stealth-warrior"), "theStealthWarrior");
    assert.strictEqual(toCamelCase("The_stealth_warrior"), "TheStealthWarrior");
  });

  it("Handles empty string", () => {
    assert.strictEqual(toCamelCase(""), "");
  });
});

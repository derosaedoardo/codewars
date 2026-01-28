import { assert, config } from "chai";
import { solution } from "./break-camelCase.js";

config.truncateThreshold = 0;

describe("Break camelCase", () => {
  it("Basic examples", () => {
    assert.strictEqual(solution("camelCase"), "camel Case");
    assert.strictEqual(solution("camelCasing"), "camel Casing");
    assert.strictEqual(solution("camelCasingTest"), "camel Casing Test");
  });

  it("Strings without uppercase letters", () => {
    assert.strictEqual(solution("identifier"), "identifier");
    assert.strictEqual(solution("break"), "break");
  });

  it("Edge cases", () => {
    assert.strictEqual(solution(""), "");
    assert.strictEqual(solution("A"), " A");
    assert.strictEqual(solution("ABC"), " A B C");
  });
});

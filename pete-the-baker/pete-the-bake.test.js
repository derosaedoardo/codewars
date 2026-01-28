import { assert, config } from "chai";
import { cakes } from "./pete-the-baker.js";

config.truncateThreshold = 0;

describe("Pete, the Baker", () => {
  it("Basic examples", () => {
    assert.strictEqual(
      cakes(
        { flour: 500, sugar: 200, eggs: 1 },
        { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
      ),
      2
    );
    assert.strictEqual(
      cakes(
        { flour: 500, sugar: 200, eggs: 1 },
        { flour: 500, sugar: 200, eggs: 1 }
      ),
      1
    );
    assert.strictEqual(
      cakes(
        { flour: 500, sugar: 200, eggs: 1 },
        { flour: 499, sugar: 200, eggs: 1 }
      ),
      0
    );
  });

  it("Missing ingredients result in 0", () => {
    assert.strictEqual(
      cakes(
        { flour: 500, sugar: 200, eggs: 1 },
        { flour: 1200, sugar: 1200 }
      ),
      0
    );
  });

  it("Ignores extra available ingredients", () => {
    assert.strictEqual(
      cakes(
        { flour: 200, sugar: 100 },
        { flour: 400, sugar: 100, milk: 1000 }
      ),
      1
    );
  });
});

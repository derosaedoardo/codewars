import { assert, config } from "chai";
import { RomanNumerals } from "./roman-numerals-helper.js";

config.truncateThreshold = 0;

describe("Roman Numerals Helper", () => {
  describe("toRoman", () => {
    it("Converts basic values", () => {
      assert.strictEqual(RomanNumerals.toRoman(1), "I");
      assert.strictEqual(RomanNumerals.toRoman(2), "II");
      assert.strictEqual(RomanNumerals.toRoman(3), "III");
      assert.strictEqual(RomanNumerals.toRoman(4), "IV");
      assert.strictEqual(RomanNumerals.toRoman(5), "V");
      assert.strictEqual(RomanNumerals.toRoman(9), "IX");
      assert.strictEqual(RomanNumerals.toRoman(10), "X");
    });

    it("Handles subtractive pairs and tens", () => {
      assert.strictEqual(RomanNumerals.toRoman(40), "XL");
      assert.strictEqual(RomanNumerals.toRoman(49), "XLIX");
      assert.strictEqual(RomanNumerals.toRoman(50), "L");
      assert.strictEqual(RomanNumerals.toRoman(90), "XC");
      assert.strictEqual(RomanNumerals.toRoman(99), "XCIX");
    });

    it("Handles hundreds and thousands", () => {
      assert.strictEqual(RomanNumerals.toRoman(400), "CD");
      assert.strictEqual(RomanNumerals.toRoman(500), "D");
      assert.strictEqual(RomanNumerals.toRoman(900), "CM");
      assert.strictEqual(RomanNumerals.toRoman(1000), "M");
      assert.strictEqual(RomanNumerals.toRoman(1984), "MCMLXXXIV");
      assert.strictEqual(RomanNumerals.toRoman(1990), "MCMXC");
      assert.strictEqual(RomanNumerals.toRoman(2008), "MMVIII");
      assert.strictEqual(RomanNumerals.toRoman(3999), "MMMCMXCIX");
    });
  });

  describe("fromRoman", () => {
    it("Parses basic values", () => {
      assert.strictEqual(RomanNumerals.fromRoman("I"), 1);
      assert.strictEqual(RomanNumerals.fromRoman("II"), 2);
      assert.strictEqual(RomanNumerals.fromRoman("III"), 3);
      assert.strictEqual(RomanNumerals.fromRoman("IV"), 4);
      assert.strictEqual(RomanNumerals.fromRoman("V"), 5);
      assert.strictEqual(RomanNumerals.fromRoman("IX"), 9);
      assert.strictEqual(RomanNumerals.fromRoman("X"), 10);
    });

    it("Parses subtractive pairs and tens", () => {
      assert.strictEqual(RomanNumerals.fromRoman("XL"), 40);
      assert.strictEqual(RomanNumerals.fromRoman("XLIX"), 49);
      assert.strictEqual(RomanNumerals.fromRoman("L"), 50);
      assert.strictEqual(RomanNumerals.fromRoman("XC"), 90);
      assert.strictEqual(RomanNumerals.fromRoman("XCIX"), 99);
    });

    it("Parses hundreds and thousands", () => {
      assert.strictEqual(RomanNumerals.fromRoman("CD"), 400);
      assert.strictEqual(RomanNumerals.fromRoman("D"), 500);
      assert.strictEqual(RomanNumerals.fromRoman("CM"), 900);
      assert.strictEqual(RomanNumerals.fromRoman("M"), 1000);
      assert.strictEqual(RomanNumerals.fromRoman("MCMLXXXIV"), 1984);
      assert.strictEqual(RomanNumerals.fromRoman("MCMXC"), 1990);
      assert.strictEqual(RomanNumerals.fromRoman("MMVIII"), 2008);
      assert.strictEqual(RomanNumerals.fromRoman("MMMCMXCIX"), 3999);
    });
  });

  describe("round-trip", () => {
    it("Converts to and from Roman numerals", () => {
      const cases = [1, 4, 9, 14, 44, 68, 83, 97, 145, 399, 944, 1666, 2024, 3999];

      for (const value of cases) {
        const roman = RomanNumerals.toRoman(value);
        assert.strictEqual(RomanNumerals.fromRoman(roman), value);
      }
    });
  });
});

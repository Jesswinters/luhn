var assert = require("chai").assert;
var luhnCheck = require("../lib/luhn-check");

describe("Luhn", function() {
  it("should return true if number is a number string of the right length", function() {
    var number = "4916572176966573";
    assert.isTrue(luhnCheck(number));
  });

  it("should return false if string is the wrong length", function() {
    var number = "491657217696657";
    assert.isFalse(luhnCheck(number));
  });

  it("should return false if value is a string but not numbers", function() {
    var number = "first and last name"
    assert.isFalse(luhnCheck(number));
  });
});
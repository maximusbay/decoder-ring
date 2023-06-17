const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
    it("should leave the spaces as is when encoding", () => {
        const actual = polybiusModule.polybius("hi max"); 
        const expected = "3242 231135";
        expect(actual).to.equal(expected);
     });
     it("should return false if the length of all numbers is odd", () => {
        const  actual = polybiusModule.polybius("3242 2311351", false);
        const expected = false;
        expect(actual).to.eql(expected);
     })
     it("should translate both 'i' and 'j' to 42", ()=> {
      const actual = polybiusModule.polybius("42", false);
      const expected = "i/j";
      expect(actual).to.equal(expected);
     })
     it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybiusModule.polybius("hello my name is Max");
      const expected = "3251131343 2345 33112351 4234 231135";
      expect(actual).to.equal(expected);
     })
     it("should decode a message by translating each pair of numbers into a letter", () => {
      const actual = polybiusModule.polybius("3242", false);
      const expected = "hi/j";
      expect(actual).to.equal(expected);
     })
})
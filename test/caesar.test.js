const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift amount is above 25", () => {
        const actual = caesarModule.caesar("jdifid", 50);
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it("should leave spaces as is", () => {
        const actual = caesarModule.caesar("hello sir", 2);
        const expected = " ";
        expect(actual[5]).to.equal(expected);
    })
    it("should leave special character as is", () => {
        const actual = caesarModule.caesar("hello!", 2);
        const expected = "!";
        expect(actual[5]).to.equal(expected);
    })
    it("should decode input", () => {
        const actual = caesarModule.caesar("jgnnq", 2, false);
        const expected = "hello";
        expect(actual).to.equal(expected);
    })
    it("should encode input", () => {
        const actual = caesarModule.caesar("hello", 2);
        const expected = "jgnnq";
        expect(actual).to.equal(expected);
    })
});

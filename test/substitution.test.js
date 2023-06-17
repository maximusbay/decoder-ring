const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const actual = substitutionModule.substitution("max");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitutionModule.substitution("max", "qwertyuioplkjhgfdsazxcvbn");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const actual = substitutionModule.substitution("max", "qwertyuioplkjhgfdsazqcvbn");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should encode a message by using the given substitution alphabet", () => {
        const actual = substitutionModule.substitution("max", "qwertyuiopasdfghjklzxcvbnm");
        const expected = "dqb";
        expect(actual).to.equal(expected);
    })
    it("should decode a message by using the given substitution alphabet", () => {
        const actual = substitutionModule.substitution("dqb", "qwertyuiopasdfghjklzxcvbnm", false);
        const expected = "max";
        expect(actual).to.equal(expected);
    })
})

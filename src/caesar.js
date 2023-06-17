// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (!shift || shift.length === 0 || shift > 25 || shift < -25) 
  {
    return false;
  }
    if (encode === false) 
    {
      shift = shift * -1;
    }
    let result = '';
    for (let i = 0; i < input.length; i++){
      const letter = input[i].toLowerCase();
      if (letters.includes(letter)) 
      {
        const indexOfLetter = letters.indexOf(letter);
        let indexOfShiftedLetter = indexOfLetter + shift;
        if (indexOfShiftedLetter > 25) {
          indexOfShiftedLetter += -26;
        }
        if (indexOfShiftedLetter < 0 && indexOfShiftedLetter > -25) {
          indexOfShiftedLetter += 26
        }
        const shiftedLetter = letters[indexOfShiftedLetter]; 
        result += shiftedLetter;
      } else {
        result += letter;
      }
    }
      return result;
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


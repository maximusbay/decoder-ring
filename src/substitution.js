    const substitutionModule = (function () {
      let trueAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      
      function encoder(input, alphabet) {
        let message = [];
        input = input.toLowerCase();
        for (let i = 0; i < input.length; i++) {
          let index = trueAlphabet.indexOf(input[i]);
          let letter = alphabet[index];
          if (index < 0) {
            message.push(input[i]);
          }
          message.push(letter);
        }
        return message.join("");
      }

      function decoder(input, alphabet) {
        let message = [];
        for (let i = 0; i < input.length; i++) {
          let index = alphabet.indexOf(input[i]);
          let letter = trueAlphabet[index];
          if (index < 0) {
            message.push(input[i]);
          }
          message.push(letter);
        }
        return message.join("");
      }

      function substitution(input, alphabet, encode = true) {
        if (!alphabet || alphabet.length !== 26) return false;
        for (let i = 0; i < input.length; i++) 
          if (alphabet.indexOf(input[i]) != alphabet.lastIndexOf(input[i])) return false;
        
        if (encode === false) {
          return decoder(input, alphabet);
        } else {
          return encoder(input, alphabet);
      }
    }

      return {
        substitution,
      };
    })();

    module.exports = { substitution: substitutionModule.substitution };
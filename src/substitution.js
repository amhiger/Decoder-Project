// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length < 26 || alphabet.length > 26 || typeof(alphabet)!= 'string')
    { 
      return false;
    }
    for (let firstLetter in alphabet) {
      for (let matchingLetter in alphabet) {
        if (alphabet[firstLetter] === alphabet[matchingLetter] && firstLetter != matchingLetter) {
          return false;
        }
      }
    }
    let encoded = "";
    let decoded = "";
    if (encode == true)
      {
        for(let i=0; i<input.length; i++)
          {
            if (input[i] == " ")
              {
                encoded += " ";
              }
            for(let j=0; j<normalAlphabet.length; j++)
              {
                if (input[i].toLowerCase() == normalAlphabet[j])
                {
                  encoded += alphabet[j];
                }
              }
          }
        return encoded;
      } 
    else
      {
        for(let i=0; i<input.length; i++)
          {
            if (input[i] == " ")
              {
                decoded += " ";
              }
            for(let j=0; j<alphabet.length; j++)
              {
                if (input[i] == alphabet[j])
                {
                  decoded += normalAlphabet[j];
                }
              }
          }
        return decoded;
      }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

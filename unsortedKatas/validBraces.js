function validBraces(braces){
  const bracePairs = {"(": ")", "[": "]", "{": "}"};
  let stack = [];
  let currentChar = "";
  
  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];
    if (bracePairs[currentChar]) {
      stack.push(bracePairs[currentChar])
    } else {
      if (braces[i] !== stack.pop()) {
        return false;
      }
    }
  }

return stack.length === 0;
}

validBraces( "()" )
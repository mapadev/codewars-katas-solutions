function scramble(str1, str2) {
    // Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
    // Only lower case letters will be used(a - z).No punctuation or digits will be included.
    // Performance needs to be considered

    if (str2.length > str1.length) return false;

    const availableLetters = {};

    for (let letter of str1) {
        if (!availableLetters[letter]) {
            availableLetters[letter] = 1;
        } else {
            availableLetters[letter]++;
        }
    }

    for (let letter of str2) {
        if (availableLetters[letter]) {
            availableLetters[letter]--;
        } else {
            return false;
        }
    }

    return true;
}

// console.log(scramble("jscripts", "javascript"));

module.exports = scramble;

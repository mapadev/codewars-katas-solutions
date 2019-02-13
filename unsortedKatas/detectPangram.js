function isPangram(string) {
    const letters = new Set();

    for (let letter of string) {
        letters.add(letter.toLowerCase());
    }

    return letters.size === 26;
}

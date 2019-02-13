function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (!text) return "";

    return text
        .split("")
        .filter(char => char.match(/[a-zA-Z]/))
        .map(char => {
            return alphabet.indexOf(char.toLowerCase()) + 1;
        })
        .join(" ");
}

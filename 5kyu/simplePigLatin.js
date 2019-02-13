function pigIt(str) {
    return str
        .split(" ")
        .map(word => {
            if (word.match(/\W/)) {
                return word;
            } else {
                return word.slice(1) + word.charAt(0) + "ay";
            }
        })
        .join(" ");
}

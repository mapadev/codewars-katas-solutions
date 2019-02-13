function score(dice) {
    const diceTable = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0 };
    let totalScore = 0;

    dice.forEach(score => (diceTable[score] += 1));

    for (let key of Object.keys(diceTable)) {
        if (diceTable[key]) {
            const count = diceTable[key];
            if (key === "1") {
                totalScore += 1000 * Math.floor(count / 3) + (count % 3) * 100;
            } else if (key === "5") {
                totalScore += 500 * Math.floor(count / 3) + (count % 3) * 50;
            } else {
                totalScore += parseInt(key) * 100 * Math.floor(count / 3);
            }
        }
    }

    return totalScore;
}

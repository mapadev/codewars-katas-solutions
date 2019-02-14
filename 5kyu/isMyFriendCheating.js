function removeNb(n) {
    const sum = (n * (n + 1)) / 2;
    let result = [];
    const numbersTable = {};

    // for (let i = 1; i <= n; i++) {
    //     sum += i;
    // }

    for (let i = 1; i <= n; i++) {
        const x = (sum - i) / (i + 1);

        if (numbersTable[i]) {
            result = result.concat([[i, x], [x, i]]);
        } else if (x % 1 === 0) {
            numbersTable[x] = true;
        }
    }

    // console.log("sum:", sum);
    // console.log("numbersTable:", numbersTable);
    // console.log("result:", result);

    return result.sort((a, b) => a[0] - b[0]);
}

// removeNb(26);

module.exports = removeNb;

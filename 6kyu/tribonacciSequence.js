function tribonacci(signature, n) {
    const result = [];

    if (n === 0) return [];

    for (let i = 0; result.length < n; i++) {
        if (result.length < 3) {
            result.push(signature[i]);
        } else {
            result.push(result[i - 1] + result[i - 2] + result[i - 3]);
        }
    }

    return result;
}

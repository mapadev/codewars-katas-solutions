function iqTest(numbers) {
    let evenNumbers = [];
    let oddNumbers = [];
    const numbersArr = numbers.split(" ");

    for (let number of numbersArr) {
        if (parseInt(number) % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }

        if (oddNumbers.length === 1 && evenNumbers.length >= 2) {
            return numbersArr.indexOf(oddNumbers[0]) + 1;
        }

        if (evenNumbers.length === 1 && oddNumbers.length >= 2) {
            return numbersArr.indexOf(evenNumbers[0]) + 1;
        }
    }
}

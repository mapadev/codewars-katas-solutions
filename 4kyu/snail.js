snail = function(array) {
    let minRow = 0;
    let maxRow = array.length - 1;
    let minCol = 0;
    let maxCol = array.length - 1;
    const result = [];

    if (array[0].length === 0) {
        return [];
    }

    while (minCol <= maxCol || minRow <= maxRow) {
        for (let i = minCol; i <= maxCol; i++) {
            result.push(array[minRow][i]);
        }

        minRow++;

        for (let i = minRow; i <= maxRow; i++) {
            result.push(array[i][maxCol]);
        }

        maxCol--;

        for (let i = maxCol; i >= minCol; i--) {
            result.push(array[maxRow][i]);
        }

        maxRow--;

        for (let i = maxRow; i >= minRow; i--) {
            result.push(array[i][minCol]);
        }

        minCol++;
    }

    return result;
};

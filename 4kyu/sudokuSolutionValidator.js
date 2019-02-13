function validSolution(board) {
    for (let row of board) {
        const rowNumbers = new Set();
        for (let num of row) {
            if (num === 0) {
                return false; // failed rule: No "zeros" on the board
            }

            rowNumbers.add(num);
        }
        if (rowNumbers.size !== 9) {
            return false; // failed rule: 9 unique numbers in each row
        }
    }

    for (let col = 0; col < 9; col++) {
        const colNumbers = new Set();

        for (let row of board) {
            colNumbers.add(row[col]);
        }

        if (colNumbers.size !== 9) {
            return false; // failed rule: 9 unique numbers in each column
        }
    }

    let blocks = [[[], [], []], [[], [], []], [[], [], []]];

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            blocks[Math.floor(row / 3)][Math.floor(col / 3)].push(
                board[row][col]
            );
        }
    }

    reducedBlocks = blocks.reduce((acc, arr) => acc.concat(arr), []);

    for (let block of reducedBlocks) {
        const blockNumbers = new Set();

        for (let num of block) {
            blockNumbers.add(num);
        }

        if (blockNumbers.size !== 9) {
            return false; // failed rule: unique numbers in 3x3 blocks
        }
    }

    return true;
}

// console.log(
//     "should be true: ",
//     validSolution([
//         [5, 3, 4, 6, 7, 8, 9, 1, 2],
//         [6, 7, 2, 1, 9, 5, 3, 4, 8],
//         [1, 9, 8, 3, 4, 2, 5, 6, 7],
//         [8, 5, 9, 7, 6, 1, 4, 2, 3],
//         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//         [9, 6, 1, 5, 3, 7, 2, 8, 4],
//         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//         [3, 4, 5, 2, 8, 6, 1, 7, 9]
//     ])
// );

// console.log(
//     "should be false: ",
//     validSolution([
//         [5, 3, 4, 6, 7, 8, 9, 1, 2],
//         [6, 7, 2, 1, 9, 0, 3, 4, 8],
//         [1, 0, 0, 3, 4, 2, 5, 6, 0],
//         [8, 5, 9, 7, 6, 1, 0, 2, 0],
//         [4, 2, 6, 8, 5, 3, 7, 9, 1],
//         [7, 1, 3, 9, 2, 4, 8, 5, 6],
//         [9, 0, 1, 5, 3, 7, 2, 1, 4],
//         [2, 8, 7, 4, 1, 9, 6, 3, 5],
//         [3, 0, 0, 4, 8, 1, 1, 7, 9]
//     ])
// );

// const testBoard = [
//     "1 2 3 4 5 6 7 8 9".split(" ").map(str => parseInt(str)),
//     "2 3 1 5 6 4 8 9 7".split(" ").map(str => parseInt(str)),
//     "3 1 2 6 4 5 9 7 8".split(" ").map(str => parseInt(str)),
//     "4 5 6 7 8 9 1 2 3".split(" ").map(str => parseInt(str)),
//     "5 6 4 8 9 7 2 3 1".split(" ").map(str => parseInt(str)),
//     "6 4 5 9 7 8 3 1 2".split(" ").map(str => parseInt(str)),
//     "7 8 9 1 2 3 4 5 6".split(" ").map(str => parseInt(str)),
//     "8 9 7 2 3 1 5 6 4".split(" ").map(str => parseInt(str)),
//     "9 7 8 3 1 2 6 4 5".split(" ").map(str => parseInt(str))
// ];

// console.log("testBoard", testBoard);

// console.log("testBoard solution: ", validSolution(testBoard));

function solution(list) {
    const result = [];
    const sequences = [list[0]];

    for (let i = 1; i < list.length + 1; i++) {
        if (list[i] - sequences[sequences.length - 1] === 1) {
            sequences.push(list[i]);
        } else {
            if (sequences.length < 3) {
                sequences.forEach(num => result.push(`${num}`));
            } else {
                result.push(
                    `${sequences[0]}-${sequences[sequences.length - 1]}`
                );
            }

            sequences.length = 0;
            sequences[0] = list[i];
        }
    }

    return result.join(",");
}

// 输入矩阵的大小，每一行的值， 需要将矩阵中的1都转为0
// 规则： 当点击一个1时，该1变为0，同时周围8个方向上的1都变为0；进一步地，如果一个1变为0，它的8个方向上的1也都变为0
// 输出一个整数，表示最少需要点击的次数才能将矩阵中的1都转为0

const directions = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
];

function solveMethod(n, m, matrix) {
    let times = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
            const cur = matrix[x][y];
            if (cur === 1) {
                times++;
                const changed = [[x, y]];
                change(n, m, matrix, changed);
            }
        }
    }
    console.log(times);
}

function change(n, m, matrix, changed) {
    if (changed.length === 0) {
        return;
    }

    const ints = changed.shift();
    for (const d of directions) {
        const newX = ints[0] + d[0];
        const newY = ints[1] + d[1];
        if (
            newX >= 0 &&
            newX < n &&
            newY >= 0 &&
            newY < m &&
            matrix[newX][newY] === 1
        ) {
            matrix[newX][newY] = 0;
            changed.push([newX, newY]);
        }
    }
    change(n, m, matrix, changed);
}

solveMethod(4, 4, [
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
]);


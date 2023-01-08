/*
Write a function that prints a chessboard pattern, with "W"
being white and "B" being black. The input is an integer that
is the number of squares on the board. Output is 2D char
array.
For example:
Input = 2
Ouput =
W B
B W
*/

function chessBoard(n) {
    const colors = ["W", "B"];
    let current;
    let board = [];
    let rows;
    for (let i = 0; i < n; i++) {
        rows = [];
        for (let j = 0; j < n; j++) {
            if (current == colors[0]) {
                rows.push(colors[0]);
                current = colors[1];
            } else {
                rows.push(colors[1]);
                current = colors[0];
            }
        }
        board.push(rows);
        if (n % 2 == 0) {
            if (current == colors[0]) {
                current = colors[1];
            } else {
                current = colors[0];
            }
        }
    }
    return board;
}

console.log(chessBoard(2))
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
    let current = colors[0];
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
    }
    return board;
}


console.log(chessBoard(2))
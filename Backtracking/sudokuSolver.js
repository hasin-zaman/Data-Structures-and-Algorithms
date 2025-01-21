/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const n = board.length

    function isValid(row, col, num) {
        for(let i=0; i<n; i++) {
            if(board[row][i] === num || board[i][col] === num) return false
        }
        const startRow = Math.floor(row/3) * 3
        const startCol = Math.floor(col/3) * 3
        for(let i=startRow; i<startRow + 3; i++) {
            for(let j=startCol; j<startCol + 3; j++) {
                if(board[i][j] === num) return false
            }
        }
        return true
    }

    function solve() {
        for(let i=0; i<n; i++) {
            for(let j=0; j<n; j++) {
                if(board[i][j] === '.') {
                    for(let num=1; num<=9; num++) {
                        if(isValid(i, j, num.toString())) {
                            board[i][j] = num.toString()
                            if(solve()) return true
                        }
                    }
                    board[i][j] = '.'
                    return false
                }
            }
        }
        return true
    }

    solve()
};
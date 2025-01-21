/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    let board = Array.from({ length: n }, () => Array(n).fill('.'))

    function isValid(row, col) {
        // check col
        for(let i=0; i<n; i++) if(board[i][col] === 'Q') return false

        // check diagonals
        for(let i=1; i<=row; i++) {
            if(col-i >= 0 && board[row-i][col-i] === 'Q') return false
            if(col+i < n && board[row-i][col+i] === 'Q') return false
        }

        return true
    }

    let res = []
    function solve(row) {
        if(row === n) {
            res.push(board.map(row => row.join('')))
            return
        }

        for(let col=0; col<n; col++) {
            if(isValid(row, col)) {
                board[row][col] = 'Q'
                solve(row + 1)
                board[row][col] = '.'
            }
        }
    }

    solve(0)
    return res
};
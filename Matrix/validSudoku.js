/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    const rowSets = Array(9).fill(null).map((set) => new Set())
    const colSets = Array(9).fill(null).map((set) => new Set())
    const boxSets = Array(9).fill(null).map((set) => new Set())

    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            let num = board[i][j]

            const box = Math.floor(i/3) * 3 + Math.floor(j/3)

            if(num === '.') continue
            if(rowSets[i].has(num) || colSets[j].has(num) || boxSets[box].has(num)) return false

            rowSets[i].add(num)
            colSets[j].add(num)
            boxSets[box].add(num)
        }
    }

    return true
};
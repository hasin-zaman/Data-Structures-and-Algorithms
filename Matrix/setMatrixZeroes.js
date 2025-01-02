/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    
    let rows = new Set()
    let cols = new Set()
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(matrix[i][j] === 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }

    for(const row of rows) {
        for(let i=0; i<n; i++) {
            matrix[row][i] = 0
        }
    }

    for(const col of cols) {
        for(let i=0; i<m; i++) {
            matrix[i][col] = 0
        }
    }

    return matrix
};
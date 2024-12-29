/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    
    for(let i=1; i<matrix.length; i++) {
        for(let j=1; j<matrix[i].length; j++) {
            if(matrix[i][j] !== 0) {
                matrix[i][j] = 1 + Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1])
            }
        }
    }
    
    return matrix.reduce((sum, row) => sum + row.reduce((a, b) => a + b, 0), 0)
};
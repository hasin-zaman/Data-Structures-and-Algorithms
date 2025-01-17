/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    const res = Array.from({ length: numRows }, (_, i) => Array(i+1).fill(1))
    for(let i=2; i<res.length; i++) {
        for(let j=1; j<res[i].length-1; j++) {
            res[i][j] = res[i-1][j-1] + res[i-1][j]
        }
    }
    return res
};
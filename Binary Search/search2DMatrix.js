/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length

    let top = 0
    let bottom = rows - 1
    let row = -1;
    while(top<=bottom) {
        row = Math.floor((top+bottom)/2)
        if(target > matrix[row][cols-1]) {
            top = row + 1
        }
        else if(target < matrix[row][0]) {
            bottom = row - 1
        }
        else {
            break
        }
    } 

    if(!(top <= bottom)) {
        return false
    }

    let l = 0;
    let r = cols - 1
    while(l<=r) {
        let m = Math.floor((l+r)/2)
        if(matrix[row][m] > target) {
            r = m - 1
        }
        else if(matrix[row][m] < target) {
            l = m + 1
        }
        else {
            return true
        }
    }

    return false
};
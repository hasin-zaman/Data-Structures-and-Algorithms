/**
 * @param {number[][]} array
 * @return {number[][]}
 */
function regionalMaximumFinder(array) {
    const rows = array.length;
    const cols = array[0].length;
    const result = [];

    function isRegionalMaximum(i, j) {
        const cellValue = array[i][j]
        if(cellValue === 0) return false

        const startRow = Math.max(0, i - cellValue)
        const endRow = Math.min(rows - 1, i + cellValue)
        const startCol = Math.max(0, j - cellValue)
        const endCol = Math.min(cols - 1, j + cellValue)

        for(let x=startRow; x<=endRow; x++) {
            for(let y=startCol; y<=endCol; y++) {
                if((x === i && y === j) || 
                (x === startRow && y === startCol) ||
                (x === endRow && y === endCol) ||
                (x === startRow && y === endCol) ||
                (x === endRow && y === startCol)) {
                    continue
                }

                if(array[x][y] > cellValue) return false
            }
        }
        return true
    }

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(isRegionalMaximum(i, j)) result.push([i, j])
        }
    }

    return result;
}

// Test case
const matrix = [
    [3, 0, 1],
    [2, 0, 0],
    [0, 0, 0],
];
console.log(regionalMaximumFinder(matrix)); // Output: [[0, 0], [0, 2]]

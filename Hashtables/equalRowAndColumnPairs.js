/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length
    const rows = new Map()
    const cols = new Map()

    for(let i=0; i<n; i++) {
        let rowKey = ''
        let colKey = ''
        for(let j=0; j<n; j++) {
            rowKey += `${grid[i][j]},`
            colKey += `${grid[j][i]},`
        }
        rows.set(rowKey, 1 + (rows.get(rowKey) || 0))
        cols.set(colKey, 1 + (cols.get(colKey) || 0))
    }

    let count = 0
    for(const [key, value] of rows) {
        if(cols.has(key)) {
            count += (value * cols.get(key))
        }
    }

    return count
};
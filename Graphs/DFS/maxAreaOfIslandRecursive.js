/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    const rows = grid.length
    const cols = grid[0].length

    let max = 0
    function dfs(l, r) {
        if (l<0 || r<0 || l==rows || r==cols || grid[l][r]==0) {
            return 0
        }

        grid[l][r] = 0

        let sum = 1 + (dfs(l+1, r) + dfs(l-1, r) + dfs(l, r+1) + dfs(l, r-1))

        return sum
    }

    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            if(grid[r][c]) {
                max = Math.max(max, dfs(r, c, 0))
            }
        }
    }
    
    return max
};
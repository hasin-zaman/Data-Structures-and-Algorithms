/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const visited = Array.from({ length: rows}, () => new Array(cols).fill(false))
    function dfs(r, c, parentR, parentC) {
        visited[r][c] = true

        for(const [dr, dc] of directions) {
            const newR = r + dr
            const newC = c + dc

            if(newR>=0 && newC>=0 && newR<rows && newC<cols && !(newR===parentR && newC===parentC) && (grid[newR][newC] === grid[r][c])) {
                if(visited[newR][newC] || dfs(newR, newC, r, c)) {
                    return true
                }
            }
        }

        return false
    }

    for(let r=0; r<rows; r++) {
        for(let c=0; c<cols; c++) {
            if(!visited[r][c] && dfs(r, c, -1, -1)) {
                return true
            }
        }
    }

    return false
};
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    
    const dp = Array.from({length: m}, () => Array(n).fill(0))
    let maxLength = 0

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            maxLength = Math.max(maxLength, dfs(i, j))
        }
    }

    function dfs(i, j) {
        if(dp[i][j] !== 0) return dp[i][j]

        let maxPath = 1
        for(const [dx, dy] of directions) {
            const x = dx + i
            const y = dy + j
            if(x>=0 && x<m && y>=0 && y<n && matrix[i][j] < matrix[x][y]) {
                maxPath = Math.max(maxPath, 1 + dfs(x, y))
            }
        }
        dp[i][j] = maxPath
        return maxPath
    }

    return maxLength
};
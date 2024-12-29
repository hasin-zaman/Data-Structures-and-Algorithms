/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    if(obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) return 0
    
    const dp = Array.from({length: m}, () => Array(n).fill(0))
    dp[0][0] = 1

    // initialize top row
    for(let i=1; i<m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i-1][0]
    }

    // initialize left col
    for(let i=1; i<n; i++) {
        dp[0][i] = obstacleGrid[0][i] === 1 ? 0 : dp[0][i-1]
    }

    for(let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            if(obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            } 
        }
    }

    return dp[m-1][n-1]
};
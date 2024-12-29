/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    const memo = new Map()

    function completePaths(l, r) {
        const key = `${l}-${r}`
        if(l === m || r === n || obstacleGrid[l][r] === 1) return 0
        if(l === m-1 && r === n-1) return 1

        if(memo.has(key)) return memo.get(key)

        let count = completePaths(l + 1, r) + completePaths(l, r + 1)
        memo.set(key, count)

        return count
    }

    return completePaths(0, 0)
};
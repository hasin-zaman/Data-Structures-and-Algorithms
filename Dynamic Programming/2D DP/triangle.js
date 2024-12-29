/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const m = triangle.length
    const dp = [...triangle[m-1]]

    for(let i=m-2; i>=0; i--) {
        for(let j=0; j<triangle[i].length; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1])
        }
    }

    return dp[0]
};
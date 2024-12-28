/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0

    for(let i=1; i*i<=n; i++) {
        const square = i * i
        for(let j=square; j<=n; j++) {
            dp[j] = Math.min(dp[j], dp[j - square] + 1)
        }
    }

    return dp[n]
};
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    if(n === 1 || n === 2) return n
    
    const MOD = Math.pow(10, 9) + 7
    const dp = [1, 1, 2]
    for(let i=3; i<=n; i++) {
        dp.push(2 * dp[dp.length-1] + dp[dp.length - 3])
        dp[dp.length - 1] %= MOD
    }

    return dp[n]
};
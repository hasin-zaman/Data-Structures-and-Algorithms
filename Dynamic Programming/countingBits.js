/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const dp = [0]
    for(let i=1; i<=n; i++) {
        //i >> 1 is right shift of bit Eg. 101 to 10 and essentially Math.floor(i/2)
        dp.push((i%2) + dp[i >> 1])
    }
    return dp
};
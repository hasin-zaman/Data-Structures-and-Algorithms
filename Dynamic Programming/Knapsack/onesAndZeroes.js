/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0))
    
    for(const str of strs) {
        let zeros = 0, ones = 0
        for(const char of str) char === '0' ? zeros++ : ones++

        //Top to bottom to avoid overwriting
        for(let i=m; i>=zeros; i--) {
            for(let j=n; j>=ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i-zeros][j-ones] + 1)
            }
        }
    }

    return dp[m][n]
};
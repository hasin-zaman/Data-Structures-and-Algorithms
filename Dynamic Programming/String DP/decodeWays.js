/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s[0] === '0') return 0
    
    const n = s.length
    const dp = Array(n+1).fill(0)
    dp[n] = 1

    for(let i=n-1; i>=0; i--) {
        if(s[i] !== '0') dp[i] = dp[i+1]

        if(i<n-1 && (s[i] === '1' || (s[i] === '2' && s[i+1] <= '6'))) {
            dp[i] += dp[i+2]
        }
    }

    return dp[0]
};
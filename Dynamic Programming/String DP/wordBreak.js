/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = Array(n + 1).fill(false);
    dp[0] = true;

    for(let i=1; i<=n; i++) {
        for(let word of wordDict) {
            if(i >= word.length && dp[i-word.length] && s.slice(i-word.length, i) === word) {
                dp[i] = true
                break
            }
        }
    }

    return dp[n]
};
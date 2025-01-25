/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    
    const dp = Array.from({ length: s.length + 1 }, () => [])
    dp[0].push([])

    for(let i=1; i<=s.length; i++) {
        for(const word of wordDict) {
            if(i >= word.length && s.slice(i - word.length, i) === word) {
                for(const prev of dp[i - word.length]) {
                    dp[i].push([...prev, word])
                }
            }
        }
    }

    return dp[s.length].map(arr => arr.join(' '))
};
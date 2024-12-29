/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length
    const memo = Array.from({length: n}, () => Array(n).fill(-1))

    function findLPS(l, r) {
        if(l > r) return 0
        if(l === r) return 1

        if(memo[l][r] !== -1) return memo[l][r]

        if(s[l] === s[r]) {
            memo[l][r] = 2 + findLPS(l+1, r-1)
        }
        else {
            memo[l][r] = Math.max(findLPS(l+1, r), findLPS(l, r-1))
        }
        return memo[l][r]
    }

    return findLPS(0, n-1)
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let resIndexes = [0, 0]
    let resLen = 0
    for(let i=0; i<s.length; i++) {
        // for odd length palindromes
        findPalindrome(i, i)
        // for even length palindromes
        findPalindrome(i, i+1)
    }

    function findPalindrome(l, r) {
        while(l>=0 && r<s.length && s[l] === s[r]) {
            if((r-l+1) > resLen) {
                res = [l, r]
                resLen = r - l + 1
            }
            l--
            r++
        }
    }

    return s.slice(res[0], res[1] + 1)
};
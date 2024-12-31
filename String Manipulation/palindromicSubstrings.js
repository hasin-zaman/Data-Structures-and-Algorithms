/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0
    for(let i=0; i<s.length; i++) {
        // for odd palindromes
        countPalindromes(i, i)
        // for even palindromes 
        countPalindromes(i, i+1)
    }

    function countPalindromes(l, r) {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            count++
            l--
            r++
        }
    }

    return count
};
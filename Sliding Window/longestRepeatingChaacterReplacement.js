/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = new Map()
    let l = 0
    let maxLength = 0
    for(let r=0; r<s.length; r++) {
        count.set(s[r], (count.get(s[r]) || 0) + 1)
        let maxFreq = Math.max(...count.values())

        while(((r-l+1) - maxFreq) > k) {
            count.set(s[l], count.get(s[l]) - 1)
            l++
        }

        maxLength = Math.max(maxLength, r-l+1)
    }

    return maxLength
};
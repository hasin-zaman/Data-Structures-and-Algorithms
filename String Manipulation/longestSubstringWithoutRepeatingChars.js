/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let maxLength = 0
    let l = 0
    for(let i=0; i<s.length; i++) {
        if(set.has(s[i])) {
            while(set.has(s[i])) {
                set.delete(s[l])
                l++
            }
        }
        set.add(s[i])

        maxLength = Math.max(maxLength, i - l + 1)
    }

    return maxLength
};
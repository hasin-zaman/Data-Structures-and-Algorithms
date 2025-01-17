/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let res = ''
    strs.sort()
    let first = strs[0]
    let last = strs[strs.length - 1]
    for(let i=0; i<first.length; i++) {
        if(first[i] !== last[i]) return res
        res += first[i]
    }

    return res
};
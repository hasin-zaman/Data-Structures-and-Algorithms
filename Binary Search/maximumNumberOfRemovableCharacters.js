/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {

    function isSubseq(s, subseq, removed) {
        let i1 = 0
        let i2 = 0

        while(i1 < s.length && i2 < subseq.length) {
            if(removed.has(i1) || s[i1]!=subseq[i2]) {
                i1++
            }
            else {
                i1++
                i2++
            }
        }
        return i2 === subseq.length;
    }

    let res = 0
    let l = 0
    let r = removable.length - 1
    while(l<=r) {
        let m = Math.floor((l+r)/2)

        let removed = new Set(removable.slice(0, m+1))
        if(isSubseq(s, p, removed)) {
            res = Math.max(res, m+1)
            l = m + 1
        }
        else {
            r = m - 1
        }
    }
    
    return res
};
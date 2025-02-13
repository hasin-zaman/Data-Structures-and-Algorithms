/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s === t) return true

    let pointerS = 0;
    for(let i=0; i<t.length; i++) {
        if(s[pointerS] == t[i]) pointerS++

        if(pointerS==s.length) return true
    }

    return false
};
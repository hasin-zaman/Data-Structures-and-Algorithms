/**
 * @param {string} s
 * @return {number}
 */
var minMovesToMakePalindrome = function(s) {
    s = Array.from(s)
    let res = 0
    while(s.length > 0) {
        i = s.indexOf(s[s.length - 1])
        if(i === s.length - 1) {
            res += i / 2
        }
        else {
            res += i
            s.splice(i, 1)
        }
        s.pop()
    }

    return res
};
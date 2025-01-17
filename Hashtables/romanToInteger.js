/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToNumeral = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])

    let res = 0
    for(let i=0; i<s.length; i++) {
        if(i < s.length-1 && romanToNumeral.get(s[i]) < romanToNumeral.get(s[i+1])) {
            res -= romanToNumeral.get(s[i])
        }
        else res += romanToNumeral.get(s[i])
    }

    return res
};
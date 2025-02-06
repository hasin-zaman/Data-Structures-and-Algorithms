/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
    if(p === '') return s === '' ? true : false

    const charMatch = s !== '' && p[0] === '.' || p[0] === s[0]

    if(p[1] === '*') return isMatch(s, p.slice(2)) || (charMatch && isMatch(s.slice(1), p))

    return charMatch ? isMatch(s.slice(1), p.slice(1)) : false
};
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    const chars = p.split('*')
    const [index1, index2] = [s.indexOf(chars[0]), s.lastIndexOf(chars[1])]
    return index1 !== -1 && index1 + chars[0].length - 1 < index2 
};
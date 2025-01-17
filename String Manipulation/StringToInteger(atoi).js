/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // step 1 remove whitespace
    s = s.trim()

    // step 2 check sign
    let i = 0
    let sign = 1
    if(s[i] === '-') {
        sign = -1
        i++
    }
    else if(s[i] === '+') {
        i++
    }

    // step 3 extract number
    let num = 0
    while(i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0))

        if(sign * num <= -Math.pow(2, 31)) return -Math.pow(2, 31)
        if(sign * num >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1

        i++
    }

    return sign * num
};
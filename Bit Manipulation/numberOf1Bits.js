/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    while(n != 0) {
        n = n & (n - 1) // Clear rightmost 1 bit at a time
        count++
    }
    return count
};
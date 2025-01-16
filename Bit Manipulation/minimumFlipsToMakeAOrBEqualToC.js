/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    
    let count = 0
    while(a > 0 || b > 0 || c > 0) {
        const aBit = a & 1 //Extract last bit
        const bBit = b & 1
        const cBit = c & 1

        if(cBit === 0) count += aBit + bBit
        else {
            if(aBit === 0 && bBit === 0) count++
        }

        // shift right by one bit that has been processed
        a >>= 1
        b >>= 1
        c >>= 1 
    }
    
    return count
};
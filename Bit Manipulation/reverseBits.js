/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reversed = 0
    // iterate over all 32 bits
    for(let i=0; i<32; i++) {
        // Left-shift 'reversed' to make space for the new bit
        reversed <<= 1
        // Add the last bit of 'n' to 'reversed'
        reversed |= (n & 1)
        // Right-shift 'n' to bring the next bit to the LSB position
        n >>= 1;
    }

    return reversed >>> 0
};
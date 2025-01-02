/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b !== 0) {
        // 1 at same position of both a and ab
        let carry = a & b

        // calculate non carrying sum using XOR
        a = a ^ b

        // shift carry left by 1 to add in the next higher order
        b = carry << 1
    }
    return a
};
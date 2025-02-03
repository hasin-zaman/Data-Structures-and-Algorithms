/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    
    // derived[0] = original[0] ^ original[1]
    // derived[1] = original[1] ^ original[2]
    // derived[2] = original[2] ^ original[3]
    // derived[n-1] = original[n-1] ^ original[0]
    // Each element in original appears exactly twice so they cancel each other out
    // Therefore valid derived will xor to 0 starting from 0
    let xor = 0
    for(const bit of derived) {
        xor = xor ^ bit
    }
    return xor == 0
};
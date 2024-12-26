/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 1
    while(true) {
        if(!sequence.includes(word.repeat(count))) {
            return count - 1
        }
        count++
    }
};
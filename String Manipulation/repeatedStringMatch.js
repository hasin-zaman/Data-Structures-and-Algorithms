/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) { 
    
    let minRepeats = Math.ceil(b.length / a.length)
    const repeats = a.repeat(minRepeats)
    return repeats.includes(b) ? minRepeats : (repeats + a).includes(b) ? minRepeats + 1 : -1
};
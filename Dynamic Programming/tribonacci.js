/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const t = [0, 1, 1]
    if(n === 0 || n === 1 || n === 2) return t[n]

    for(let i=3; i<=n; i++) {
        t.push(t[0] + t[1] + t[2])
        t.shift() 
    }

    return t[2]
};
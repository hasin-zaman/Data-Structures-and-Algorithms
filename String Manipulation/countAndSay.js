/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return '1'

    let res = '1'
    for(let i=0; i<n-1; i++) {
        let count = 1
        let nextRes = ''
        for(let j=1; j<res.length; j++) {
            if(res[j] === res[j-1]) count++
            else {
                nextRes += count + res[j-1]
                count = 1
            }
        }
        nextRes += count + res[res.length-1]
        res = nextRes
    }

    return res
};
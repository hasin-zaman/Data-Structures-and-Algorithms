/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n==1) return 1

    let count = new Map()
    let set = new Set()
    for(let i=0; i<trust.length; i++) {
        count.set(trust[i][1], (count.get(trust[i][1]) + 1) || 1)
        set.add(trust[i][0])
    }

    for(let [judge, c] of count) {
        if (c==(n-1) && !set.has(judge)) {
            return judge
        }
    }

    return -1
};
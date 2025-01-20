/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.sort((a, b) => a - b)
    cuts = [0, ...cuts, n]
    
    const memo = new Map()
    function cost(start, end) {
        if(start + 1 === end) return 0

        const key = `${start}-${end}`
        if(memo.has(key)) return memo.get(key)

        let minCost = Infinity
        for(let i=start+1; i<end; i++) {
            minCost = Math.min(minCost, (cuts[end]-cuts[start]) + cost(start, i) + cost(i, end))
        }

        memo.set(key, minCost)
        return minCost
    }

    return cost(0, cuts.length - 1)
};
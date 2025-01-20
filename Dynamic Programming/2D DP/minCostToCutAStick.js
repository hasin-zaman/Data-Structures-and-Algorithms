/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.sort((a, b) => a - b)
    cuts = [0, ...cuts, n]
    
    const len = cuts.length
    const dp = Array.from({ length: len }, () => Array(len).fill(0))

    // defines how many cuts to include for example calculate for all 2 cuts then 3 cuts
    for(let size=2; size<len; size++) {
        for(let start=0; start<len-size; start++) {
            let end = start + size

            let minCost = Infinity
            for(let i=start+1; i<end; i++) {
                minCost = Math.min(minCost, (cuts[end] - cuts[start]) + dp[start][i] + dp[i][end])
            }
            dp[start][end] = minCost
        }
    }

    return dp[0][len-1]
};
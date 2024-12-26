/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    const memo = new Map()
    function solve(i) {
        if(i === 0) return cost[0]
        if(i === 1) return cost[1]

        if(memo.has(i)) return memo.get(i)
        memo.set(i, cost[i] + Math.min(solve(i-1), solve(i-2)))

        return memo.get(i)
    }

    return Math.min(solve(cost.length-1), solve(cost.length-2))
};
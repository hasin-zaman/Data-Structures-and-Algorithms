/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let prev1 = cost[1], prev2 = cost[0]
    for(let i=2; i<cost.length; i++) {
        const current = Math.min(prev1, prev2) + cost[i]
        prev2 = prev1
        prev1 = current
    }

    return Math.min(prev1, prev2)
};
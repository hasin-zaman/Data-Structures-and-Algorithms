/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    
    let dp = [...costs[0]]
    let temp = []
    for(let i=1; i<costs.length; i++) {
        temp[0] = costs[i][0] + Math.min(dp[1], dp[2])
        temp[1] = costs[i][1] + Math.min(dp[0], dp[2])
        temp[2] = costs[i][2] + Math.min(dp[0], dp[1])
        dp = [...temp]
    }

    return Math.min(...dp)
};
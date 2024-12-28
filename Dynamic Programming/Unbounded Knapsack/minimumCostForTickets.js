/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const n = days[days.length-1]
    const dp = new Array(n + 1).fill(0)
    const travelDays = new Set(days)

    for(let i=1; i<=n; i++) {
        if(travelDays.has(i)) {
            dp[i] = dp[i-1] + costs[0]
            dp[i] = Math.min(dp[i], (i-7) >= 0 ? dp[i-7] + costs[1] : costs[1])
            dp[i] = Math.min(dp[i], (i-30) >= 0 ? dp[i-30] + costs[2] : costs[2])
        }
        else {
            dp[i] = dp[i-1]
        }
    }

    return dp[n]
};
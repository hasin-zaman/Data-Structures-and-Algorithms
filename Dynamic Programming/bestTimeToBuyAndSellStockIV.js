/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(k === 0) return 0

    const cost = Array(k + 1).fill(Infinity)
    const profit = Array(k + 1).fill(0)

    for(const price of prices) {
        for(let i=1; i<=k; i++) {
            cost[i] = Math.min(cost[i], price - profit[i - 1])
            profit[i] = Math.max(profit[i], price - cost[i])
        }
    }

    return profit[k]
};
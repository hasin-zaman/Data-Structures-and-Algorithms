/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let leftMin = prices[0]
    let rightMax = prices[prices.length - 1]
    const leftProfits = Array(prices.length).fill(0)
    const rightProfits = Array(prices.length + 1).fill(0)
    for(let l=1; l<prices.length; l++) {
        leftProfits[l] = Math.max(leftProfits[l - 1], prices[l] - leftMin)
        leftMin = Math.min(leftMin, prices[l])
    }

    for(let r=prices.length-2; r>=0; r--) {
        rightProfits[r] = Math.max(rightProfits[r + 1], rightMax - prices[r])
        rightMax = Math.max(rightMax, prices[r])
    }

    let profit = 0
    for(let i=0; i<prices.length; i++) {
        profit = Math.max(profit, leftProfits[i] + rightProfits[i+1])
    }

    return profit
};
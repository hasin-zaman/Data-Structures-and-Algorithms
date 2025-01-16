/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    
    let notBought = 0, bought = -prices[0]
    for(let i=1; i<prices.length; i++) {
        notBought = Math.max(notBought, bought + prices[i] - fee)
        bought = Math.max(bought, notBought - prices[i])
    }
    return notBought
};
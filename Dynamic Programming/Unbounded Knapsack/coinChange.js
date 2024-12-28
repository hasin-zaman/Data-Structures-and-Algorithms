/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0 //need 0 coins to form 0 amount

    for(const coin of coins) {
        for(let j=coin; j<=amount; j++) {
            dp[j] = Math.min(dp[j], dp[j-coin] + 1)
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};
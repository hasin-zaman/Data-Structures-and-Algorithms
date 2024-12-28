/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    const sum = stones.reduce((a, b) => a + b, 0)
    const halfSum = Math.floor(sum/2)

    //boolean values to check which sum are achievable
    const dp = Array(halfSum + 1).fill(false)
    dp[0] = true

    for(const weight of stones) {
        for(let j=halfSum; j>=weight; j--) {
            if(dp[j - weight]) dp[j] = true
        }
    }

    let maxAchievableSum = 0
    for(let i=halfSum; i>=0; i--) {
        if(dp[i]) {
            maxAchievableSum = i
            break
        }
    }

    return sum - (2 * maxAchievableSum)
};
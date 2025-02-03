/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function(s, queries) {
    const n = s.length

    let nearestRightCandle = [], nearestLeftCandle = [], prefixSum = []

    let candle = -1
    let plateSum = 0
    for(let i=0; i<n; i++) {
        if(s[i] === '|') candle = i
        else plateSum++
        nearestLeftCandle[i] = candle
        prefixSum[i] = plateSum
    }

    candle = n
    for(let i=n-1; i>=0; i--) {
        if(s[i] === '|') candle = i
        nearestRightCandle[i] = candle
    }

    let res = []
    for(const query of queries) {
        let leftBound = nearestRightCandle[query[0]]
        let rightBound = nearestLeftCandle[query[1]]
        if(leftBound < rightBound) res.push(prefixSum[rightBound] - prefixSum[leftBound])
        else res.push(0)
    }

    return res
};
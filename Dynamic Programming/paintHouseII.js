/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
    const n = costs.length
    const k = costs[0].length
    
    for(let i=1; i<n; i++) {
        let min = [Infinity, -1], secondMin = Infinity
        for(let j=0; j<k; j++) {
            if(costs[i-1][j] < min[0]) {
                secondMin = min[0]
                min = [costs[i-1][j], j]
            }
            else if(costs[i-1][j] < secondMin) secondMin = costs[i-1][j]
        }

        for(let j=0; j<k; j++) {
            if(j !== min[1]) costs[i][j] += min[0]
            else costs[i][j] += secondMin
        }
    }

    return Math.min(...costs[n-1])
};
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const m = points.length
    const n = points[0].length

    const dp = [...points[0]]
    for(let i=1; i<m; i++) {
        let left = Array(n).fill(0)
        let right = Array(n).fill(0)

        // left to right pass
        left[0] = dp[0]
        for(let j=1; j<n; j++) {
            left[j] = Math.max(dp[j], left[j-1] - 1)
        }

        // right to left pass
        right[n-1] = dp[n-1]
        for(let j=n-2; j>=0; j--) {
            right[j] = Math.max(dp[j], right[j+1] - 1)
        }

        for(let j=0; j<n; j++) {
            dp[j] = points[i][j] + Math.max(left[j], right[j])
        }
    }

    return Math.max(...dp)
};
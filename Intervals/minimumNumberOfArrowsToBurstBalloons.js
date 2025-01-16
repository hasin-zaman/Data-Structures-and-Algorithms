/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1])

    let count = 1
    let prevInterval = points[0][1]
    for(let i=1; i<points.length; i++) {
        if(points[i][0] > prevInterval) {
            count++
            prevInterval = points[i][1]
        }
    }

    return count
};
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])

    let removals = 0
    let prevInterval = intervals[0][1]
    for(let i=1; i<intervals.length; i++) {
        if(intervals[i][0] < prevInterval) removals++
        else prevInterval = intervals[i][1]
    }
    return removals
};
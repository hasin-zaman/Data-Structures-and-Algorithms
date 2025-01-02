/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let res = []
    let prevInterval = intervals[0]
    for(let i=1; i<intervals.length; i++) {
        if(intervals[i][0] <= prevInterval[1]) {
            prevInterval[1] = Math.max(prevInterval[1], intervals[i][1])
        }
        else {
            res.push(prevInterval)
            prevInterval = intervals[i]
        }
    }

    res.push(prevInterval)
    return res
};
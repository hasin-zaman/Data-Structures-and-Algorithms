/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = []
    let i = 0
    // push all intervals before new interval
    while(i<intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i++
    }

    // merge all overlapping intervals
    while(i<intervals.length && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    res.push(newInterval)

    // push rest of intervals
    while(i<intervals.length) {
        res.push(intervals[i])
        i++
    }

    return res
};
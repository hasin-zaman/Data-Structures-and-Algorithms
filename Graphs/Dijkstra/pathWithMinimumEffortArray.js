/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
    const rows = heights.length
    const cols = heights[0].length

    let effort = Array.from({length: rows}, () => Array(cols).fill(Infinity))
    effort[0][0] = 0
    
    let pq = [[0, 0, 0]]
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while(pq.length>0) {
        pq.sort((a, b) => a[2]-b[2])
        const [l, r, currentEffort] = pq.shift()

        if(l==(rows-1) && r==(cols-1)) return currentEffort

        for(let [dx, dy] of directions) {
            const newL = l + dx
            const newR = r + dy

            if(newL<0 || newR<0 || newL==rows || newR==cols) continue

            const newEffort = Math.max(currentEffort, Math.abs(heights[newL][newR] - heights[l][r]))

            if(newEffort<effort[newL][newR]) {
                effort[newL][newR] = newEffort
                pq.push([newL, newR, newEffort])
            }
        }
    }
};
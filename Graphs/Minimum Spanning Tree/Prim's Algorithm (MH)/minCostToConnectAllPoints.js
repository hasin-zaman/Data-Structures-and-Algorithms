/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length
    const minHeap = new MinPriorityQueue({ priority: x => x[0] })
    
    const visited = new Set()
    let cost = 0
    minHeap.enqueue([0, 0])
    while(visited.size < n) {
        const [distance, i] = minHeap.dequeue().element
        if (visited.has(i)) continue;

        visited.add(i)
        cost += distance

        for(let j=0; j<n; j++) {
            if(!visited.has(j)) {
                const dist = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
                minHeap.enqueue([dist, j])
            }
        }
    }

    return cost
};
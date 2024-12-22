/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    
    // building adjacency list
    let graph = new Map()
    for(let [u, v, w] of times) {
        if(!graph.has(u)) graph.set(u, [])
        graph.get(u).push([v, w])
    }

    //maintain distance from starting node
    let dist = new Array(n+1).fill(Infinity)
    dist[k] = 0

    let pq = [[k, dist]]

    while(pq.length>0) {
        // sort queue to get the node with the smallest distance
        pq.sort((a, b) => a[1]-b[1])
        let [node, d] = pq.shift()

        if(d > dist[node]) continue

        for(let [neighbor, weight] of (graph.get(node) || [])) {
            let newDist = dist[node] + weight

            if(newDist < dist[neighbor]) {
                dist[neighbor] = newDist
                pq.push([neighbor, newDist])
            }
        }
    }

    let maxDist = Math.max(...dist.slice(1))

    return maxDist == Infinity ? -1 : maxDist
};
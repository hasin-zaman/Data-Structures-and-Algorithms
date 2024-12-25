/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n==1) return [0]
    
    const graph = new Map()
    const inDegree = new Array(n).fill(0)
    for(const [u, v] of edges) {
        if(!graph.has(u)) graph.set(u, [])
        if(!graph.has(v)) graph.set(v, [])
        graph.get(u).push(v)
        inDegree[u]++
        graph.get(v).push(u)
        inDegree[v]++
    }

    let queue = []
    for(let i=0; i<n; i++) {
        if(inDegree[i]==1) queue.push(i)
    }

    while(n>2) {
        const size = queue.length
        n -= size

        for(let i=0; i<size; i++) {
            const node = queue.shift()
            for(const neighbor of (graph.get(node) || [])) {
                inDegree[neighbor]--
                if(inDegree[neighbor] === 1) {
                    queue.push(neighbor)
                }
            }
        }
    }

    return queue
};
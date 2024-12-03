/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    //build adjacency list for effecient traversal
    let graph = new Map()
    for(let [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, [])
        if (!graph.has(v)) graph.set(v, [])
        graph.get(u).push(v)
        graph.get(v).push(u)
    }

    let visited = new Set()
    let queue = [source]
    visited.add(source);
    while(queue.length>0) {
        const node = queue.shift()
        if(node==destination) return true

        for(let neighbor of graph.get(node)) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return false
};
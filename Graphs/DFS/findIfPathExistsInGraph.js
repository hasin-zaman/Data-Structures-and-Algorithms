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
    function dfs(node) {
        if(node==destination) return true
        if(visited.has(node)) return false
        visited.add(node)

        for(let neighbor of graph.get(node)) {
            if(dfs(neighbor)) return true
        }
        return false
    }

    return dfs(source)
};
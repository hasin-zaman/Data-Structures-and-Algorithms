/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    
    const visited = new Set()
    const recStack = new Set()
    function dfs(node) {
        if(recStack.has(node)) return false
        if(visited.has(node)) return true

        visited.add(node)
        recStack.add(node)
        for(const neighbor of graph[node]) {
            if(!dfs(neighbor)) return false
        }
        recStack.delete(node)
        return true
    }

    let safeNodes = []
    for(let i=0; i<graph.length; i++) {
        if(dfs(i)) {
            safeNodes.push(i)
        }
    }

    return safeNodes
};
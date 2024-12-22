/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    
    let flags = [] 
    function dfs(node, flag) {
        flags[node] = flag
        for(let neighbor of graph[node]) {
            if (flags[neighbor]!=undefined) {
                if (flags[neighbor]==flag) {
                    return false
                }
            }
            else {
                if(!dfs(neighbor, !flag)) {
                    return false
                }
                
            }
        }
        return true
    }

    for(let i=0; i<graph.length; i++) {
        if (flags[i]==undefined) {
            if(!dfs(i, true)) {
                return false
            }
        }
    }
    return true
};
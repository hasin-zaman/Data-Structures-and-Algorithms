/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    
    const adjList = new Map()
    for(let i=0; i<equations.length; i++) {
        if(!adjList.has(equations[i][0])) adjList.set(equations[i][0], [])
        if(!adjList.has(equations[i][1])) adjList.set(equations[i][1], [])
        adjList.get(equations[i][0]).push([equations[i][1], values[i]])
        adjList.get(equations[i][1]).push([equations[i][0], 1 / values[i]])
    }

    const res = []
    for(const [u, v] of queries) {
        
        const visited = new Set()
        function dfs(current, target, product) {
            if(current === target) return product
            visited.add(current) 

            for(const [neighbor, val] of (adjList.get(current) || [])) {
                if(!visited.has(neighbor)) {
                    const result = dfs(neighbor, target, product * val)
                    if(result !== -1) return result
                }
            }
            return -1
        }

        if(!adjList.has(u) || !adjList.has(v)) res.push(-1)
        else res.push(dfs(u, v, 1))
    }

    return res
};
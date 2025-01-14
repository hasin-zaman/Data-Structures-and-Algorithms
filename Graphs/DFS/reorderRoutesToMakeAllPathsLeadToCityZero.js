/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    
    const adjList = new Map()
    for(const [u, v] of connections) {
        if(!adjList.has(u)) adjList.set(u, [])
        if(!adjList.has(v)) adjList.set(v, [])
        adjList.get(u).push([v, true]) // outgoing edge
        adjList.get(v).push([u, false]) // incoming edge
    }

    let visited = new Set()
    visited.add(0)
    let count = 0
    let stack = [0]
    while(stack.length > 0) {
        const city = stack.pop()
        visited.add(city)

        for(const [neighbor, isOutGoing] of adjList.get(city)) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor)
                if(isOutGoing) count++
                stack.push(neighbor)
            }
        }
    }

    return count
};
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map()
    for(const [course, prereq] of prerequisites) {
        if(!graph.has(prereq)) graph.set(prereq, [])
        graph.get(prereq).push(course)
    }

    const visited = new Set()
    const recStack = new Set()
    function dfs(node) {
        if(recStack.has(node)) return false
        if(visited.has(node)) return true

        recStack.add(node)
        visited.add(node)
        for(const neighbor of (graph.get(node) || [])) {
            if(!dfs(neighbor)) return false
        }

        recStack.delete(node)
        return true
    }

    for(let i=0; i<numCourses; i++) {
        if(!dfs(i)) return false
    }

    return true
};
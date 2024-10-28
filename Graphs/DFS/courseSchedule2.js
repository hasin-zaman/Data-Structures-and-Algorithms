/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let map = new Map()
    for(let i=0; i<numCourses; i++) {
        map.set(i, [])
    }

    for(let [course, prereq] of prerequisites) {
        map.get(course).push(prereq)
    }

    let res = []
    let visited = new Set()
    let cycle = new Set()
    function dfs(course) {
        if(cycle.has(course)) {
            return false
        }

        if(visited.has(course)) {
            return true
        }

        cycle.add(course)
        for(let prereq of map.get(course)) {
            if(!dfs(prereq)) {
                return false
            }
        }
        cycle.delete(course)
        visited.add(course)
        res.push(course)
        return true
    }

    for(let i=0; i<numCourses; i++) {
        if(!dfs(i)) {
            return []
        }
    }

    return res
};
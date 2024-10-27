/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = new Map()
    for(let i=0; i<numCourses; i++) {
        map.set(i, [])
    }

    for(let [course, prereq] of prerequisites) {
        map.get(course).push(prereq)
    }

    let visited = new Set()
    function dfs(course) {
        if(visited.has(course)) {
            return false
        }

        if(map.get(course) == []) {
            return true
        }

        visited.add(course)
        for(let prereq of map.get(course)) {
            if(!dfs(prereq)) {
                return false
            }
        }
        visited.delete(course)
        map.set(course, [])

        return true
    }

    for(let i=0; i<numCourses; i++) {
        if(!dfs(i)) {
            return false
        }
    }

    return true
};
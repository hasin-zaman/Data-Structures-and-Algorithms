/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map()
    const inDegree = new Array(numCourses).fill(0)
    for(const [course, prereq] of prerequisites) {
        if(!graph.has(prereq)) graph.set(prereq, [])
        graph.get(prereq).push(course)
        inDegree[course]++
    }

    const queue = []
    for(let i=0; i<numCourses; i++) {
        if(inDegree[i] === 0) queue.push(i)
    }

    let count = 0
    while(queue.length>0) {
        const node = queue.shift()
        count++

        for(const neighbor of (graph.get(node) || [])) {
            inDegree[neighbor]--
            if(inDegree[neighbor]==0) queue.push(neighbor)
        }
    }
    
    return count === numCourses
};
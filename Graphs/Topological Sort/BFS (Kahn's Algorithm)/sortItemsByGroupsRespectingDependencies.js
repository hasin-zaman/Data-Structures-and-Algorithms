/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    // Initialize items-to-group if uncategorized
    for(let i = 0; i < n; i++) {
        if(group[i] === -1) {
            group[i] = m++;
        }
    }

    // Adjacency lists and indegree arrays
    const itemsGraph = Array.from({ length: n }, () => []);
    const inDegreeItems = Array(n).fill(0)
    const groupsGraph = Array.from({ length: m }, () => []);
    const inDegreeGroups = Array(m).fill(0);

    // Build graphs
    for(let i=0; i<n; i++) {
        for(const pre of beforeItems[i]) {
            itemsGraph[pre].push(i)
            inDegreeItems[i]++
            if(group[i] !== group[pre]) {
                groupsGraph[group[pre]].push(group[i])
                inDegreeGroups[group[i]]++
            }
        }
    }

    // Sort items within each group
    const sortedItems = topologicalSort(itemsGraph, inDegreeItems, n)
    if(sortedItems.length === 0) return []

    // Sort groups
    const sortedGroups = topologicalSort(groupsGraph, inDegreeGroups, m)
    if(sortedGroups.length === 0) return []

    // Merge groups and their sorted items
    const sortedItemsInGroup = Array.from({ length: m }, () => []);
    for(const item of sortedItems) {
        sortedItemsInGroup[group[item]].push(item)
    }

    const result = []
    for(const grp of sortedGroups) {
        result.push(...sortedItemsInGroup[grp])
    }

    return result
};

function topologicalSort(graph, inDegree, totalNodes) {
    const queue = []
    for(let i=0; i<totalNodes; i++) {
        if(inDegree[i] === 0) queue.push(i)
    }

    const sorted = []
    while(queue.length>0) {
        const node = queue.shift()
        sorted.push(node)
        for(const neighbor of graph[node]) {
            inDegree[neighbor]--
            if(inDegree[neighbor] === 0) queue.push(neighbor)
        }
    }

    return sorted.length !== totalNodes ? [] : sorted
}
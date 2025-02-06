/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if(k === 0) return [target.val]

    const adjList = new Map()
    function convertToGraph(node, parent) {
        if(!node) return

        adjList.set(node.val, [])
        if(parent) adjList.get(node.val).push(parent.val)
        if(node.left) adjList.get(node.val).push(node.left.val)
        if(node.right) adjList.get(node.val).push(node.right.val)

        convertToGraph(node.left, node)
        convertToGraph(node.right, node)
    }  

    convertToGraph(root, null)

    let count = 0
    const visited = new Set()
    let queue = [target.val]
    while(queue.length > 0) {
        if(count === k) return queue

        const n = queue.length
        for(let i=0; i<n; i++) {
            const val = queue.shift()
            visited.add(val)

            for(const neighbor of (adjList.get(val) || [])) {
                if(!visited.has(neighbor)) queue.push(neighbor)
            }
        }
        count++
    }

    return []
};
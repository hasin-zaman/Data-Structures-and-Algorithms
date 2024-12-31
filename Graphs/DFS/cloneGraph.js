/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let oldToCopy = new Map()

    function dfs(node) {
        if(oldToCopy.has(node)) return oldToCopy.get(node)

        const copyNode = new Node(node.val)
        oldToCopy.set(node, copyNode)
        for(const neighbor of node.neighbors) {
            const copyNeighbor = dfs(neighbor)
            copyNode.neighbors.push(copyNeighbor)
        }

        return copyNode
    }

    return node != null ? dfs(node) : null
};
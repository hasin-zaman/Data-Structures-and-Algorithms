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
    let oldToNew = new Map()

    function dfs(node) {
        if(oldToNew.has(node)) {
            return oldToNew.get(node)
        }

        let copy = new Node(node.val)
        oldToNew.set(node, copy)
        for(let neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor))
        }

        return copy
    }

    return node!=null ? dfs(node) : null
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {

    let maxZigZag = 0
    function dfs(node, direction, length) {
        if(!node) return 0

        maxZigZag = Math.max(maxZigZag, length)

        if(direction === 'left') {
            dfs(node.left, 'left', 1)
            dfs(node.right, 'right', length + 1)
        }
        else {
            dfs(node.left, 'left', length + 1)
            dfs(node.right, 'right', 1)
        }
    }
    
    dfs(root, 'left', 0)
    dfs(root, 'right', 0)
    return maxZigZag
};
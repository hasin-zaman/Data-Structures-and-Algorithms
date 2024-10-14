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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) {
        return false
    }

    function dfs(root, sum) {
        if(!root) {
            return false
        }

        sum += root.val
        if(!root.left && !root.right && sum==targetSum) {
            return true
        }

        return dfs(root.left, sum) || dfs(root.right, sum)
    }

    return dfs(root, 0, targetSum)
};
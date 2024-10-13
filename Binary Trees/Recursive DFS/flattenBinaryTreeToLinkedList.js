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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    function dfs(root) {
        if(!root) {
            return null
        }

        let leftTail = dfs(root.left)
        let rightTail = dfs(root.right)

        if(leftTail) {
            leftTail.right = root.right
            root.right = root.left
            root.left = null
        }

        return rightTail || leftTail || root
    }

    dfs(root)
};
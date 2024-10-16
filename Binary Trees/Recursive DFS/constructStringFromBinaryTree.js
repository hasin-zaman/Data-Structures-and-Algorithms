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
 * @return {string}
 */
var tree2str = function(root) {
    let res = []

    function dfs(root) {
        if(!root) {
            return
        }

        res.push("(")
        res.push(root.val.toString())

        if(!root.left && root.right) {
            res.push("()")
        }

        dfs(root.left)
        dfs(root.right)

        res.push(")")
    }

    dfs(root)

    return res.slice(1, res.length-1).join("")
};
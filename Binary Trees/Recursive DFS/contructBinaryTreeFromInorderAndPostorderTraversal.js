/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    function dfs(inStart, inEnd, postStart, postEnd) {
        if(inStart > inEnd || postStart > postEnd) return null

        const node = new TreeNode(postorder[postEnd])
        const inorderIndex = inorder.indexOf(node.val)
        const leftSize = inorderIndex - inStart

        node.left = dfs(inStart, inorderIndex - 1, postStart, postStart + leftSize - 1)
        node.right = dfs(inorderIndex + 1, inEnd, postStart + leftSize, postEnd - 1)

        return node
    }
    
    return dfs(0, inorder.length - 1, 0, postorder.length - 1)
};
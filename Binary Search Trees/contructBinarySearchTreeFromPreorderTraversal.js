/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {

    function dfs(array) {
        if(array.length === 0) return null

        const left = []
        const right = []

        const node = new TreeNode(array[0])
        for(let i=1; i<array.length; i++) {
            if(array[i] < node.val) left.push(array[i])
            else right.push(array[i])
        }

        node.left = dfs(left)
        node.right = dfs(right)

        return node
    }
    
    return dfs(preorder)
};
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
var maxSumBST = function(root) {

    let maxSum = 0
    function dfs(node) {
        if(!node) return [true, 0, Infinity, -Infinity] // [isBST, sum, min, max]

        const [isLeftBST, leftSum, leftMin, leftMax] = dfs(node.left)
        const [isRightBST, rightSum, rightMin, rightMax] = dfs(node.right)

        if(isLeftBST && isRightBST && node.val > leftMax && node.val < rightMin) {
            const sum = leftSum + rightSum + node.val
            maxSum = Math.max(maxSum, sum)
            return [true, sum, Math.min(leftMin, node.val), Math.max(rightMax, node.val)]
        }

        return [false, 0, Infinity, -Infinity]
    }
    
    dfs(root, 0)
    return maxSum
};
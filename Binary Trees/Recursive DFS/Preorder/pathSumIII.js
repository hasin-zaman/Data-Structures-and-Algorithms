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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    
    const prefixMap = new Map()
    prefixMap.set(0, 1) // There is 1 way to get sum of 0
    let count = 0
    function dfs(node, sum) {
        if(!node) return

        sum += node.val
        const neededSum = sum - targetSum
        if(prefixMap.has(neededSum)) {
            count += prefixMap.get(neededSum)
        }
        
        prefixMap.set(sum, 1 + (prefixMap.get(sum) || 0))

        dfs(node.left, sum)
        dfs(node.right, sum)

        prefixMap.set(sum, prefixMap.get(sum) - 1)
    }

    dfs(root, 0)
    return count
};
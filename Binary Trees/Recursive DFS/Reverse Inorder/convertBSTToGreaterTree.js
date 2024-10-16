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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let curSum = 0

    function reverseInorder(root) {
        if(!root) {
            return
        }
        
        let right = reverseInorder(root.right)
        let temp = root.val
        root.val += curSum
        curSum += temp
        let left = reverseInorder(root.left)
    }
    
    reverseInorder(root)

    return root
};
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root) return false
    if(!subRoot) return true

    function areSame(root1, root2) {
        if(!root1 && !root2) return true
        if(!root1 || !root2 || root1.val !== root2.val) return false

        return areSame(root1.left, root2.left) && areSame(root1.right, root2.right)
    }

    if(areSame(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
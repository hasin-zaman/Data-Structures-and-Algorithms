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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null

    if(key < root.val) root.left = deleteNode(root.left, key)
    else if(key > root.val) root.right = deleteNode(root.right, key)
    else {
        // No children
        if(!root.left && !root.right) return null
        // One child
        else if(!root.left) return root.right
        else if(!root.right) return root.left
        // Two children
        else {
            // Find smallest value in right tree to replace ensuring valid BST
            let sucessor = findMin(root.right)
            root.val = successor.val
            root.right = deleteNode(root.right, successor.val)
        }
    }

    return root
};

function findMin(node) {
    while(node.left) node = node.left
    return node
}
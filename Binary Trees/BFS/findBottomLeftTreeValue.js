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
var findBottomLeftValue = function(root) {

    let queue = [root]
    let node;
    while(queue.length>0) {
        node = queue.shift()
        if(node.right) {
            queue.push(node.right)
        }
        if(node.left) {
            queue.push(node.left)
        }
    }
    
    return node.val
};
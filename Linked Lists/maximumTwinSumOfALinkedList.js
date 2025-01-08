/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    while(slow) {
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }

    let maxSum = 0
    let first = head
    let second = prev
    while(second) {
        maxSum = Math.max(maxSum, first.val + second.val)
        first = first.next
        second = second.next
    }

    return maxSum
};
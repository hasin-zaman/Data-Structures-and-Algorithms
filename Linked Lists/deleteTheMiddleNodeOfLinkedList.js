/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {

    let dummy = new ListNode(0, head)
    let slow = dummy
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    slow.next = slow.next.next

    return dummy.next
};
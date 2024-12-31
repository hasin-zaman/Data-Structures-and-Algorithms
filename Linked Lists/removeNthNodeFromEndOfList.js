/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    let curr = dummy
    let temp = head
    for(let i=0; i<n; i++) {
        temp = temp.next
    }

    while(temp) {
        temp = temp.next
        curr = curr.next
    }
    curr.next = curr.next ? curr.next.next : null

    return dummy.next
}
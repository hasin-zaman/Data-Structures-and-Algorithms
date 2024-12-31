/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // find mid of the list
    let slow = head
    let fast = head.next
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // divide list in two and reverse second list
    let root = slow.next
    let second = slow.next
    slow.next = null
    let prev = null
    while(second) {
        let temp = second.next
        second.next = prev
        prev = second
        second = temp
    }

    // merge the two lists
    let reversedSecond = prev
    while(head && reversedSecond) {
        let temp1 = head.next
        let temp2 = reversedSecond.next
        head.next = reversedSecond
        reversedSecond.next = temp1

        head = temp1
        reversedSecond = temp2
    }
};
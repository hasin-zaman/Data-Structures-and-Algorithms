/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null
    
    let mergedLists = lists[0];
    for(let i=1; i<lists.length; i++) {
        mergedLists = mergeTwoLists(mergedLists, lists[i])
    }

    return mergedLists
};

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode()
    let curr = dummy
    while(list1 && list2) {
        if(list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } 
        else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }

    if(list1) curr.next = list1
    if(list2) curr.next = list2

    return dummy.next
}
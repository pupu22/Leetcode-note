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
    if(head === null || head.next === null) return null
    const dummy = new ListNode(0, head)
    let fast = slow = dummy
    let num = n +1
    while(num--){
        fast = fast.next
    }
    while(fast){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
};
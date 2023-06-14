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
var reverseList = function(head) {
    if(head === null) return null
    let cur = head, pre = null, tmp = null
    while(cur!== null){
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    return pre
};
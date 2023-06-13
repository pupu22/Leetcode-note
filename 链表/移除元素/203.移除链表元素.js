/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dump = new ListNode(0, head)
    let p = dump
    while(p.next){
        if(p.next.val === val){
            p.next = p.next.next
            continue
        }
        p = p.next
    }
    return dump.next
};
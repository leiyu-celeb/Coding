/* 面试题 02.08. 环路检测   （同 环形链表II）

给定一个链表，如果它是有环链表，实现一个算法返回环路的开头节点。 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) break;
    }
    if(fast === null || fast.next === null) {
        return null;
    }
    slow = head;
    while(slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
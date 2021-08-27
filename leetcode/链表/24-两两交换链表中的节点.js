/* 24. 两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。 
*/


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
 var swapPairs = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    const newHead = head.next;      //指向第二个节点
    head.next = swapPairs(head.next.next);
    newHead.next = head;
    return newHead;
};


var swapPairs = function(head) {
    if(!head || !head.next) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(head.next.next);
    newHead.next = head;
    return newHead;
}


var swapPairs = function(head) {
    if(!head || !head.next) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(head.next.next);
    newHead.next = head;
    return newHead;
}

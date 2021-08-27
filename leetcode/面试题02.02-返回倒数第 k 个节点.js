/* 面试题 02.02. 返回倒数第 k 个节点
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

注意：本题相对原题稍作改动

示例：

输入： 1->2->3->4->5 和 k = 2
输出： 4
说明：

给定的 k 保证是有效的。 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    let slow = head, fast = head;       //快慢指针
    while(k > 0) {      //快指针先走k步
        k--;
        fast = fast.next;
    }
    if(fast === null) return head.val;        //链表恰好只有k个节点，走k步，fast为null，返回head.val  
    while(fast.next != null) {           //fast指针走到最后一个节点时退出循环
        slow = slow.next;
        fast = fast.next;
    }
    return slow.next.val;
};
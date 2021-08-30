/* 2021/1/7
206. 反转链表 / 剑指offer.24

反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ */


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
// 方法一： 递归实现
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;    
};

var reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

//迭代实现：
var reverseListNoRecursion = function(head) {
    let pre = null, cur = head, nxt = head;
    while(cur != null) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}

var reverseListNoRecursion = function(head) {
    let pre = null, cur = head, nxt = head;
    while(cur != null) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}

var reverseListNoRecursion = function(head) {
    let pre = null, cur = head, nxt = head;
    while(cur) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}

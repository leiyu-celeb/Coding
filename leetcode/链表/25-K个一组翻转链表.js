/* 2021/1/8
25. K个一组翻转链表
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例：
给你这个链表：1->2->3->4->5
当 k = 2 时，应当返回: 2->1->4->3->5
当 k = 3 时，应当返回: 3->2->1->4->5

说明：
你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
//迭代实现反转链表[a, b)处的k个节点，再递归实现k个一组反转链表
var reverse = function(a, b){
    let pre = null, cur = a, nxt = a;
    while(cur != b){
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}
var reverseKGroup = function(head, k) {
    if(head == null) return null;
    let a = head;
    let b = head;
    for(let i = 0; i < k; i++){
        if(b == null) return head;    //不足k个节点，不用反转链表，直接返回（题目要求）
        b = b.next;
    }
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);  //b指向的是下一组的头节点
    return newHead;
};



var reverse = function(a, b) {
    let pre = null, cur = a, nxt = a;
    while(cur != b) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}
var reverseKGroup = function(head, k) {
    if(!head) return head;
    let a = head, b = head;
    for(let i = 0; i < k; i++) {
        if(b == null) return head;
        b = b.next;
    }
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
}


var reverse = function(a, b) {
    let pre = null, cur = a, nxt = a;
    while(cur != b) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}
var reverseKGroup = function(head, k) {
    if(!head) return head;
    let a = head, b = head;
    for(let i = 0; i < k; i++) {
        if(b == null) return head;
        b = b.next;
    }
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
}

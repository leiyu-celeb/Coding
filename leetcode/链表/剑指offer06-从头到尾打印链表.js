/* 剑指 Offer 06. 从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：
输入：head = [1,3,2]
输出：[2,3,1]
 

限制：
0 <= 链表长度 <= 10000
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
//方法一：遍历链表，再反转数组
var reversePrint = function(head) {
    let res = [];
    let p = head;
    while(p) {
        res.push(p.val);
        p = p.next;
    }
    return res.reverse();
};



var reversePrint = function(head){
    let p = reverseList(head);
    let result = [];
    while(p){
        result.push(p.val);
        p = p.next;
    }
    return result;
}

var reverseList = function(head){
    let pre = null, cur = head, nxt = head;
    while(cur){
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}




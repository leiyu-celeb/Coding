/* 剑指 Offer 24. 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 
限制：
0 <= 节点个数 <= 5000

注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/ 
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
 * @return {ListNode}
 */
//递归实现反转整个链表
var reverseList = function(head){
    if(head == null || head.next == null){
        return head;
    }
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

//迭代实现反转整个链表
var reverseList1 = function(head){
    let pre = null;
    let cur = head;
    let nxt = head;
    while(cur){
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}

/* 
leetcode 92. 反转链表 II
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：

输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]

示例 2：

输入：head = [5], left = 1, right = 1
输出：[5] 

*/

let successor = null;     //后继节点
var reverseN = function(head, n){ //递归反转链表前n个节点
    if(n == 1){
        successor = head.next;
        return head;
    }
    let last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = successor;
    return last;
}

var reverseBetween = function(head, m, n){
    if(m === 1){
        return reverseN(head, n);
    }
    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
}


/* 2021/1/7
92. 反转链表 II
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL */



//方法一： 递归实现 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let successor = null;   // 后继节点
var reverseN = function(head, n){ // 反转链表的前n个节点
    if(n === 1){
        successor = head.next;
        return head;
    }
    let last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = successor;
    return last;        
}
var reverseBetween = function(head, m, n) {
    if(m === 1){    // m === 1 即为反转链表的前n个节点
        return reverseN(head, n);
    }
    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
};




//反转整个链表
// var reverseList = function(head){
//     if(head == null || head.next == null){
//         return head;
//     }
//     let last = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return last;
// }

//反转前n个节点
// let successor = null;
// var reverseN = function(head, n){
//     if(n === 1){  //一个节点
//         successor = head.next;
//         return head;       //返回本身
//     }
//     let last = reverseN(head.next, n - 1);
//     head.next.next = head;
//     head.next = successor;
//     return last;
// }



//反转链表[m, n]处的节点
// var reverseBetween = function(head, m, n){
//     if(m === 1){
//         return reverseN(head, n);
//     }
//     head.next = reverseBetween(head.next, m - 1 , n - 1);
//     return head;
// }










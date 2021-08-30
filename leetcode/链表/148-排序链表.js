/* 148. 排序链表
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
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
// 方法一：遍历链表元素到数组中，数组排序，再构造新的链表  时间复杂度O(nlogn), 空间复杂度O(n)
var sortList = function(head) {
    if(!head || !head.next) return head;
    let cur = head;
    const res = [];
    while(cur) {
        res.push(cur.val);
        cur = cur.next;
    }
    res.sort((a, b) => a - b);
    let newHead = null, tail = null;
    res.forEach(val => {
        if(!newHead) {
            newHead = tail = new ListNode(val);
        }else{
            tail.next = new ListNode(val);
            tail = tail.next;
        }
    })
    return newHead;
};


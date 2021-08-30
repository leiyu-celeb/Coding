/* 61. 旋转链表

给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

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
// 闭合为环
var rotateRight = function(head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }

    let add = n - k % n;
    if (add === n) {
        return head;
    }

    cur.next = head;
    while (add) {
        cur = cur.next;
        add--;
    }

    const ret = cur.next;
    cur.next = null;
    return ret;
};


var rotateRight = function(head, k) {
    if(k === 0 || !head || !head.next) {
        return head;
    }
    let len = 1;
    let cur = head;
    while(cur) {
        cur = cur.next;
        len++;
    }
    let add = n - k % n;
    if(add === n) {
        return head;
    }
    cur.next = head;
    while(add) {
        cur = cur.next;
        add--;
    }
    const res = cur.next;
    cur.next = null;
    return ret;
}

var rotateRight = function(head, k) {
    if(k === 0 || !head || !head.next) {
        return head;
    }
    let num = 1;
    let cur = head;
    while(cur) {
        cur = cur.next;
        num++;
    }
    let add = num - k % num;
    if(add === num) {
        return head;
    }
    cur.next = head;
    while(add) {
        cur = cur.next;
        add--;
    }
    const newHead = cur.next;
    cur.next = null;
    return newHead;
}

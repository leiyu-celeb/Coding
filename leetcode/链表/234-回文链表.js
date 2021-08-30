/* 234. 回文链表
请判断一个链表是否为回文链表。

示例 1:
输入: 1->2
输出: false

示例 2:
输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ 
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
 * @return {boolean}
 */
//方法一：双指针，将链表元素值放到数组中，双指针遍历数组，时间复杂度O(n)，空间复杂度O(n)
var isPalindrome = function(head) {
    const res = [];
    while(head) {
        res.push(head.val);
        head = head.next;
    }
    //双指针移动
    for(let i = 0, j = res.length - 1; i < j; i++, j--) {
        if(res[i] != res[j]){
            return false;
        }
    }
    return true;
};

var isPalindrome = function(head) {
    const res = [];
    while(head) {
        res.push(head.val);
        head = head.next;
    }
    for(let i = 0, j = res.length - 1; i < j; i++, j--) {
        if(res[i] != res[j]) {
            return false;
        }
    }
    return true;
}


var isPalindrome = function(head) {
    const res = [];
    while(head) {
        res.push(head.val);
        head = head.next;
    }
    for(let i = 0, j = res.length - 1; i < j; i++, j--) {
        if(res[i] != res[j]) {
            return false;
        }
    }
    return true;
}


/**
 * @description: 
 * @param {ListNode} head
 * @return {boolean}
 */
//方法二：双指针，快慢指针：慢指针一次走一步，快指针一次走两步，快慢指针同时出发。
//当快指针移动到链表的末尾时，慢指针恰好到链表的中间，通过慢指针将链表分为两部分。
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    let slow = head, fast = head;
    let pre = null;
    while(fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    let head2 = reverseList(slow);
    while(head && head2) {
        if(head.val != head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    return true;
}

var reverseList = function(head) {
    let pre = null, cur = head, nxt = head;
    while(cur) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}




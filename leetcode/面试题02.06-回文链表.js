/* 面试题 02.06. 回文链表
编写一个函数，检查输入的链表是否是回文的。

示例 1：

输入： 1->2
输出： false 

示例 2：

输入： 1->2->2->1
输出： true 
 

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//方法一：将链表元素值复制到数组中，再用双指针法判断是否是回文。
//时间复杂度O(n)，空间复杂度O(n)，使用了一个数组存放链表的元素值。
var isPalindrome = function(head) {
    const res = [];
    while(head) {
        res.push(head.val);
        head = head.next;
    }

    let i = 0, j = res.length - 1;          //双指针
    while(i < j) {
        if(res[i] !== res[j]) {     
            return false;
        }
        i++;
        j--;
    }
    return true;
};

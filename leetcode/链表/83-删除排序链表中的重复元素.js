/* 2021/1/18
83. 删除排序链表中的重复元素

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2

示例 2:

输入: 1->1->2->3->3
输出: 1->2->3 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;
    let slow = head, fast = head;
    while(fast != null) {
        if(slow.val != fast.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    slow.next = null;
    return head;
};



var deleteDuplicates = function(head) {
    if(!head) return null;
    let slow = head, fast = head;
    while(fast) {
        if(fast.val != slow.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    slow.next = null;
    return head;
}

var deleteDuplicates = function(head) {
    if(!head) return null;
    let slow = head, fast = head;
    while(fast != null) {
        if(fast.val != slow.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    slow.next = null;
    return head;
}



var deleteDuplicates = function(head) {
    if(!head) return null;
    let slow = head, fast = head;
    while(fast != null) {
        if(fast.val != slow.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    slow.next = null;
    return head;
}


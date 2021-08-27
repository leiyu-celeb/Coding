/* 2021/1/13
19. 删除链表的倒数第N个节点
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.

说明：
给定的 n 保证是有效的。

进阶：
你能尝试使用一趟扫描实现吗？ */



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head, fast = head; 
    //定义快慢指针，快指针先走n步，然后快慢指针再一起同时移动，快指针走到最后一个节点时，慢指针走到倒数第n + 1个节点
    while(n > 0){
        n--;
        fast = fast.next;
    }
    if(fast == null){ //快指针走了n步为null时，说明链表head刚好n个节点，那么删除头节点即可
        return head.next;
    }
    while(fast.next != null){ //退出循环时，快指针指向最后一个节点，慢指针指向倒数第 n + 1 个节点
         slow = slow.next;
         fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};

var removeNthFromEnd = function(head, n) {
    let slow = head, fast = head;
    while(n > 0) {
        n--;
        fast = fast.next;
    }
    if(fast == null) {
        return head.next;
    }
    while(fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
}

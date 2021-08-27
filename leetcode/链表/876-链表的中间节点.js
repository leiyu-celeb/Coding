/* 2021/1/14
876. 链表的中间结点

给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。 */

 


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//双指针，快慢指针
var middleNode = function(head) {
    let fast = head, slow = head;
    while(fast != null && fast.next != null){  //fast指针走到最后一个节点，或者空时跳出循环
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
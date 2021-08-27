/* 2021/1/14
142. 环形链表 II
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

进阶：
你是否可以使用 O(1) 空间解决此题？ */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow)  break;
    }
    if(fast == null || fast.next == null){
        return null;
    }
    slow = head;
    while(slow != fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};


var detectCycle = function(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) break;
    }
    if(!fast || !fast.next) return null;
    slow = head;
    while(slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}





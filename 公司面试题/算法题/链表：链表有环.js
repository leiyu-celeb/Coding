/* leetcode 141. 环形链表
给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
如果链表中存在环，则返回 true 。 否则，返回 false 。

进阶：
你能用 O(1)（即，常量）内存解决此问题吗？ */

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
//双指针：快慢指针，因为fast指针每次走两步，因此while循环的条件判断必须按如下这样写
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            return true;
        }
    }
    return false;
};





/* leetcode 142. 环形链表 II
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

进阶：
你是否可以使用 O(1) 空间解决此题？ */
 


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
var detectCycle = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) break;
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
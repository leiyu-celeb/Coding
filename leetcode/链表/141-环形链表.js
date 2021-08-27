/* 141. 环形链表
给定一个链表，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
如果链表中存在环，则返回 true 。 否则，返回 false 。
*/


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            return true;
        }
    }
    return false;
};


var hasCycle = function(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) {
            return true;
        }
    }
    return false;
}

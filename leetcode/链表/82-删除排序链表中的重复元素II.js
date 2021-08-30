/* 82. 删除排序链表中的重复元素 II

存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，

只保留原始链表中 没有重复出现 的数字。返回同样按升序排列的结果链表。 

*/


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head){
        return head;              
    }
    const dummyHead = new ListNode(0, head);
    let curr = dummyHead;
    while(curr.next && curr.next.next){
        if(curr.next.val === curr.next.next.val){
            const val = curr.next.val;
            while(curr.next && curr.next.val === val){
                curr.next = curr.next.next;
            }
        }else{
            curr = curr.next;
        }
    }
    return dummyHead.next;  
};

var deleteDuplicates = function(head) {
    if(!head) return head;
    const dummyHead = new ListNode(0, head);
    let cur = dummyHead;
    while(cur.next && cur.next.next) {
        if(cur.next.val === cur.next.next.val) {
            const val = cur.next.val;
            while(cur.next && cur.next.val === val) {
                cur.next = cur.next.next;
            }
        }else{
            cur = cur.next;
        }
    }
    return dummyHead.next;
}

var deleteDuplicates = function(head) {
    if(!head) return head;
    const dummyHead = new ListNode(0, head);
    let cur = dummyHead;
    while(cur.next && cur.next.next) {
        if(cur.next.val === cur.next.next.val) {
            const val = cur.next.val;
            while(cur.next && cur.next.val === val) {
                cur.next = cur.next.next;
            }
        }else{
            cur = cur.next;
        }
    }
    return dummyHead.next;
}

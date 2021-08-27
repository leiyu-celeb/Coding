/* 21. 合并两个有序链表

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//方法一：递归法
var mergeTwoLists = function(l1, l2) {
    if(l1 == null){
        return l2;
    }else if(l2 == null){
        return l1;
    }else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}



//方法二：迭代法 dummyHead
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let tail = dummyHead;
    let p = l1, q = l2;
    while(p && q){
        if(p.val <= q.val){
            tail.next = p;
            p = p.next;
            tail = tail.next;
        }else{
            tail.next = q;
            q = q.next;
            tail = tail.next;
        }
    }
    if(p){
        tail.next = p;
    }
    if(q){
        tail.next = q;
    }
    return dummyHead.next;
};

var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let tail = dummyHead;
    let p = l1, q = l2;
    while(p && q) {
        if(p.val <= q.val) {
            tail.next = p;
            p = p.next;
            tail = tail.next;
        }else{
            tail.next = q;
            q = q.next;
            tail = tail.next;
        }
    }
    if(p) {
        tail.next = p;
    }
    if(q) {
        tail.next = q;
    }
    return dummyHead.next;
}

/* 剑指 Offer 25. 合并两个排序的链表
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

限制：
0 <= 链表长度 <= 1000

注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/ 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//方法一：迭代法
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    let p = l1, q = l2;
    let head;
    if(p.val <= q.val){   //构造归并链表的头结点
        head = new ListNode(p.val);
        p = p.next;
    }else{
        head = new ListNode(q.val);
        q = q.next;
    }
    let tail = head;    //tail指针用于归并
    while(p && q){
        if(p.val < q.val){
            tail.next = p;
            p = p.next;
            tail = tail.next;
        }else{
            tail.next = q;
            q = q.next;
            tail = tail.next;
        }
    }
    if(p == null){
        tail.next = q;
    }
    if(q == null){
        tail.next = p;
    }
    return head;
};


//方法二： 递归法
var mergeTwoLists1 = function(l1, l2){
    if(l1 == null){
        return l2;
    }else if(l2 == null){
        return l1;
    }else if(l1.val < l2.val){
        l1.next = mergeTwoLists1(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists1(l1, l2.next);
        return l2;
    }
}


const mergeTwoLists = function(l1, l2){
    let dummyHead = new ListNode(0);
    let tail = dummyHead;
    let p = l1;
    let q = l2;
    while(p && q){
        if(p.val <= q.val){
            tail.next = p;
            p = p.next;
            tail = tail.next;
        }else{
            tail.next = q;
            q = q.next;
            tail = tail.next
        }
    }
    if(p){
        tail.next = p;
    }
    if(q){
        tail.next = q;
    }
    return dummyHead.next;
}


const mergeTwoLists = function(l1, l2) {
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
}
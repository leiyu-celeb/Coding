/* 剑指 Offer 52. 两个链表的第一个公共节点

  输入两个链表，找出它们的第一个公共节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//方法一： 哈希法，时间复杂度O(m + n), 空间复杂度O(m)或O(n)
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    const map = new Map();
    let cur = headA;
    while(cur) {
        map.set(cur, cur.val);     //存节点的引用到哈希map中
        cur = cur.next;
    }
    let nxt = headB;
    while(nxt) {
        if(map.has(nxt)){
            return nxt;
        }
        nxt = nxt.next;
    }
    return null;
};

//方法二：双指针
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let p = headA;
    let q = headB;
    while(p != q) {
        if(p){
            p = p.next;
        }else{
            p = headA;
        }
        if(q){
            q = q.next;
        }else{
            q = headB;
        }
    }
    return p;
}
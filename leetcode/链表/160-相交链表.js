/* 160. 相交链表

编写一个程序，找到两个单链表相交的起始节点。

注意：

如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。 */


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
//方法一： 哈希法，时间复杂度O(m + n), 空间复杂度O(m)或O(n)    < 100ms
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

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    const map = new Map();
    let cur = headA;
    while(cur) {
        map.set(cur, cur.val);
        cur = cur.next;
    }
    let nxt = headB;
    while(nxt) {
        if(map.get(nxt)) {
            return nxt;
        }
        nxt = nxt.next;
    }
    return null;
}





//方法二：双指针 > 900ms   空间复杂度O(1)
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


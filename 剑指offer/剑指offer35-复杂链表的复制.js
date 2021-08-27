/* 剑指 Offer 35. 复杂链表的复制

请实现 copyRandomList 函数，复制一个复杂链表。

在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。 */


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if(!head) return head;
    const map = new Map();
    let cur = head;
    while(cur) {             //先遍历一遍，拷贝值
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    while(cur) {           //第二次遍历，根据map映射关系，将random和next指针指向对应的节点或者null
        map.get(cur).next = map.get(cur.next) || null;      //存在则拷贝当前节点next指针的值，否则为null
        map.get(cur).random = map.get(cur.random) || null;  //存在则拷贝当前节点random指针的值，否则为null
        cur = cur.next;
    }
    return map.get(head);
};
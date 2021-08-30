/* 138. 复制带随机指针的链表
给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。

新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。

复制链表中的指针都不应指向原链表中的节点 。

*/

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
//方法一：利用Map进行复制链表
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
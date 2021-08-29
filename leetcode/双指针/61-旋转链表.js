/* 61. 旋转链表

给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

示例1:
输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3] 

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(k === 0 || !head || !head.next) return head;
  let num = 1;     // 链表节点个数
  let cur = head;
  while(cur.next) {
    cur = cur.next;
    num++;
  }
  let add = num - k % num;    
  if(add === num) {
      return head;
  }
  cur.next = head;
  while(add) {
    cur = cur.next;
    add--;
  }
  let newHead = cur.next;
  cur.next = null;
  return newHead;
}


var rotateRight = function(head, k) {
  if(k === 0 || !head || !head.next) return head;
  let num = 1;
  let cur = head;
  while(cur.next) {
      cur = cur.next;
      num++;
  }
  let add = num - k % num;
  if(add === num) {
      return head;
  }
  cur.next = head;
  while(add) {
      cur = cur.next;
      add--;
  }
  let newHead = cur.next;
  cur.next = null;
  return newHead;
}

/* 面试题 04.03. 特定深度节点链表

给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。

返回一个包含所有深度的链表的数组。

示例：

输入：[1,2,3,4,5,null,7,8]

        1
       /  \ 
      2    3
     / \    \ 
    4   5    7
   /
  8

输出：[[1],[2,3],[4,5,7],[8]] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
//方法：层次遍历 BFS
var listOfDepth = function(tree) {
    if(!tree) return [];       
    let res = [];
    let queue = [];
    queue.push(tree);
    while(queue.length) {
        let currentLayerSize = queue.length;  //获得当前层的节点数
        let head = null;       //当前层链表头节点
        let tail = head;       //当前层链表尾节点
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            if(!head) {
                head = tail = new ListNode(node.val, null);
            }else{
                tail.next = new ListNode(node.val, null);
                tail = tail.next;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(head);
    }
    return res;
}; 
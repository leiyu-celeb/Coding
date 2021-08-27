/* 199. 二叉树的右视图

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]

解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <--- 

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//方法：BFS，层次遍历的思想，每次处理当前层的最后一个元素时再加入结果集
 var rightSideView = function(root) {
    let result = [];
    if(!root) return result;
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let currentLayerSize = queue.length;
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            if(i === currentLayerSize - 1){         //处理当前层的最后一个节点时，加入到结果集中
                result.push(node.val);
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
     }
    return result;
};

var rightSideView = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [];
    queue.push(root);
    while(queue.length) {
        let currentLayerSize = queue.length;
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            if(i === currentLayerSize - 1) {
                result.push(node.val);
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
}

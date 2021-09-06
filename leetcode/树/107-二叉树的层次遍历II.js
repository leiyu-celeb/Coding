/* 107. 二叉树的层序遍历 II
给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层序遍历为：

[
  [15,7],
  [9,20],
  [3]
] 
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let currentLayerSize = queue.length;
        result.unshift([]);
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            result[0].push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
};




//方法二：正常层次遍历后，对结果集数组reverse
var levelOrderBottom = function(root) {
    let result = [];     //保存最后遍历结果
    if(root == null){    //空树
        return result;
    }
    let queue = [];     //定义一个队列
    queue.push(root);   //根节点进队
    while(queue.length){     //队不空
        let currentLayerSize = queue.length;   //获得当前队中元素个数，也是当前层的节点个数
        result.push([]);  
        for(let i = 1; i <= currentLayerSize; i++){
             let node = queue.shift();
             result[result.length - 1].push(node.val);     
             if(node.left) queue.push(node.left);        //左孩子不空，左孩子进队
             if(node.right)  queue.push(node.right);     //右孩子不空，右孩子进队
        }
    }
    return result.reverse();
};

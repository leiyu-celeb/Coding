/* leetcode 102. 二叉树的层序遍历    考察： 树 + 广度优先搜索BFS
 
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
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
//方法一：广度优先搜索BFS
var levelOrder = function(root) {
    let result = [];     //保存最后遍历结果
    if(root == null){    //空树
        return result;
    }
    let queue = [];     //定义一个队列queue
    queue.push(root);   //根节点进队
    while(queue.length){     //队不空
        let currentLayerSize = queue.length;   //获得当前队中元素个数，也是当前层的节点个数
        result.push([]);    //遍历完一层，添加新一层的数组
        for(let i = 1; i <= currentLayerSize; i++){
             let node = queue.shift();     //当前节点出队
             result[result.length - 1].push(node.val);   //当前节点val值插入到对应层的数组内     
             if(node.left) queue.push(node.left);        //左孩子不空，左孩子进队
             if(node.right)  queue.push(node.right);     //右孩子不空，右孩子进队
        }
    }
    return result;
};



var levelOrder = function(root){
    let result = [];
    if(root === null) return result;
    let queue = [];
    queue.push(root);
    while(queue.length){
        let currentLayerSize = queue.length;
        result.push([]);
        for(let i = 0; i < currentLayerSize; i++){
            let node = queue.shift();
            result[result.length - 1].push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
}
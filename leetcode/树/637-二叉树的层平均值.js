/* 637. 二叉树的层平均值

给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

示例 1：

输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]

解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 

提示：

节点值的范围在32位有符号整数范围内。 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//方法： 层次遍历的思路
var averageOfLevels = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let currentLayerSize = queue.length;          //获得当前层节点数
        let sum = 0;              //记录每一层的累加和
        let avg = 0;              //记录每一层的平均值
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            sum = sum + node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        avg = sum / currentLayerSize;
        result.push(avg);
    }
    return result;
};
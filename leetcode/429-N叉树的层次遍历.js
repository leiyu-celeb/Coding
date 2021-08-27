/* 429. N 叉树的层序遍历

给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

 

示例 1：

输入：root = [1,null,3,2,4,null,5,6]
输出：[[1],[3,2,4],[5,6]]

提示：

树的高度不会超过 1000
树的节点总数在 [0, 10^4] 之间 */


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let currentLayerSize = queue.length;
        result.push([]);
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            result[result.length - 1].push(node.val);
            if(node.children.length > 0) {               //与二叉树的层次遍历的区别
                node.children.forEach(child => { 
                    queue.push(child);              //将当前节点node的所有孩子节点加入到队列queue中
                })
            }
        }
    }
    return result;
};
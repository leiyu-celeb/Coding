/* 剑指 Offer 32 - I. 从上到下打印二叉树
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。


例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回：

[3,9,20,15,7]
 

提示：

节点总数 <= 1000 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
    let result = [];
    if(!root) return result;
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let currentLayerSize = queue.length;
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            result.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
};
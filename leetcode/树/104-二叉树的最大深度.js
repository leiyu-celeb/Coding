/* 104. 二叉树的最大深度

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
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
 * @return {number}
 */
//方法一： 深度优先遍历，递归法
var maxDepth = function(root) {
    if(!root) return 0;        //空树
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}


//方法二：广度优先遍历，非递归
var maxDepth = function(root) {
    if(!root) return 0;
    const queue = [];
    queue.push(root);
    let depth = 0;
    while(queue.length) {
        const currentLayerSize = queue.length;
        for(let i = 0; i < currentLayerSize; i++) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        depth++;
    }
    return depth;
}


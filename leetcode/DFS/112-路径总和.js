/* 112. 路径总和

给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 

判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 

叶子节点 是指没有子节点的节点 

提示：

树中节点的数目在范围 [0, 5000] 内
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
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
 * @param {number} targetSum
 * @return {boolean}
 */
//方法：递归
var hasPathSum = function(root, targetSum) {
    if(!root) return false;          //空树返回false
    if(!root.left && !root.right) {              //叶子节点，看节点值是否等于targetSum
        return root.val === targetSum;
    }
    // 当前递归问题 拆解成 两个子树的问题，其中一个true了就行
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};





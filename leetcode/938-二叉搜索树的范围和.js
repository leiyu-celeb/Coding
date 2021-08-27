/* 938. 二叉搜索树的范围和
给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

提示：

树中节点数目在范围 [1, 2 * 10^4] 内
1 <= Node.val <= 10^5
1 <= low <= high <= 10^5
所有 Node.val 互不相同 */



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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let res = 0;

    const inorderTraverse = function(root) {
        if(!root) return root;
        inorderTraverse(root.left);
        if(root.val <= high && root.val >= low){
            res += root.val;
        }
        inorderTraverse(root.right);
    }
    inorderTraverse(root);
    return res;
};
/* 110. 平衡二叉树
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;       //空树为AVL树
    //如果左右子树的最大深度差距小于等于1，再去判断左右子树是否分别符合AVL树的特点
    return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

var maxDepth = function(root) {     //求二叉树的最大深度
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}


/* 剑指 Offer 55 - I. 二叉树的深度
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。


提示：
节点总数 <= 10000
注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/ */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//方法一：递归法实现求二叉树的最大深度
var maxDepth = function(root) {
    if(root == null) return 0;       //空树
    if(root.left == null && root.right == null) return 1;   //只有根节点
    return Math.max(maxDepth(root.left) , maxDepth(root.right)) + 1;
};

//方法二：栈实现求二叉树最大深度

var maxDepth = function(root) {
    if(root === null) return 0;
    if(root.left === null && root.right === null) return 1;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1; 
}
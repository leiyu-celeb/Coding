/* 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，

满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5] */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//方法一：
var lowestCommonAncestor = function(root, p, q) {
    let ancestor = root;
    while(true) {
        if(p.val < ancestor.val && q.val < ancestor.val) {      
            ancestor = ancestor.left;
        }else if(p.val > ancestor.val && q.val > ancestor.val) {
            ancestor = ancestor.right;
        }else{
            break;
        }
    }
    return ancestor;
};

//方法二：DFS递归
var lowestCommonAncestor = function(root, p, q) {
    /* 
        核心思路：
        1. 当 传入的祖先节点 同时大于/小于 p、q节点 更新祖先节点位置
            a. root 同时小于 p、q 基于BST的特性可知 期望的祖先节点 应该在右子树 root = root.right
            b. root 同时大于 p、q 基于BST的特性可知 期望的祖先节点 应该在左子树 root = root.left
        2. 当遇到/第一次 祖先节点root 不同时大于或小于 p、q的节点 即为我我们期望的最近公共祖先节点
    */
    if (!root) return root

    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root
    }
};
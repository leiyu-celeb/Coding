/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
//方法一：使用于所有的二叉树查找问题
var searchBST = function(root, val) {
    if(root === null) return null;
    if(root.val === val) return root;
    return searchBST(root.left, val) || searchBST(root.right, val);
};




//方法二：利用二叉搜索树的特点
var searchBST = function(root, val) {
    if(root === null) return null;
    if(root.val === val) return root;
    if(root.val < val) return searchBST(root.right, val);
    if(root.val > val) return searchBST(root.left, val);
}
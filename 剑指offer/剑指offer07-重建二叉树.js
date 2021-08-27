/* 剑指 Offer 07. 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 

限制：
0 <= 节点个数 <= 5000

注意：本题与主站 105 题重复：
https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(preorder.length == 0)  return null;    //base case
    const root = new TreeNode(preorder[0]);    //前序遍历序列第一个是根节点，构建根节点
    const mid = inorder.indexOf(preorder[0]); //找到根节点在中序遍历序列的索引
    
    //递归操作根节点的左子树和右子树
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));  
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
};

/* 105. 从前序与中序遍历序列构造二叉树

根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

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
function TreeNode(val) {  //树节点的构造函数
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {
    if(preorder.length == 0)  return null;    //base case
    const root = new TreeNode(preorder[0]);    //前序遍历序列第一个是根节点，构建根节点
    const mid = inorder.indexOf(preorder[0]); //找到根节点在中序遍历序列的索引
    
    //递归操作根节点的左子树和右子树
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));  
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
};
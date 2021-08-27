/* 897. 递增顺序搜索树
给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，
使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

提示：
树中节点数的取值范围是 [1, 100]
0 <= Node.val <= 1000
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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
    const res = [];

    const inorder = function(root) {
        if(!root) return root;
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    //构造新的递增顺序搜索树
    let head = null;
    let tail = null;
    for(let val of res){
        if(!head){
            head = tail = new TreeNode(val);
        }else{
            tail.right = new TreeNode(val);
            tail = tail.right;
        }
    }
    return head;
};
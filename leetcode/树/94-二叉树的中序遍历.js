/* 94. 二叉树的中序遍历

给定一个二叉树的根节点 root ，返回它的 中序 遍历。 */

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
 * @return {number[]}
 */
//方法一：递归法
var inorderTraversal = function(root) {
    const res = [];

    const inorder = function(node) {
        if(!node) return ;

        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return res;
};


//方法二：迭代法(非递归)
var inorderTraversal = function(root) {
    if(!root) return [];
    const res = [];    
    const stack = [];     
    while (root || stack.length) {       
        while (root) {             
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};


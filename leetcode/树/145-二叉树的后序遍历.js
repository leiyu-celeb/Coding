/* 145. 二叉树的后序遍历
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？ */


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
var postorderTraversal = function(root) {
    const res = [];

    const postorder = (node) => {
        if(!node) return ;
        postorder(node.left);
        postorder(node.right);
        res.push(node.val);
    }
    postorder(root);
    return res;
};


//方法二：迭代法(非递归)
var postorderTraversal = function(root) {
    if(!root) return [];
    const res = [];
    const stack = [];
    stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        res.unshift(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return res;
}

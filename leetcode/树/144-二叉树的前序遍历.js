/* 144. 二叉树的前序遍历

给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

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
 * @return {number[]}
 */
//方法一：递归法
var preorderTraversal = function(root) {
    const res = [];
    
    const preorder = (node) => {
        if(!node) return ;
        res.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }
    preorder(root);
    return res;
};

//方法二：迭代法(非递归)
var preorderTraversal = function(root) {
    if(!root) return [];
    const res = [];    
    const stack = [];     
    while (root || stack.length) {       
        while (root) {             
            stack.push(root);
            res.push(root.val);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }
    return res;
};


//非递归的另一种写法
var preorderTraversal = function(root) {
    if(!root) return [];
    const res = [];
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return res;
};

var preorderTraversal = function(root) {
    if(!root) return [];
    const res = [];
    const stack = [];
    stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return res;
}



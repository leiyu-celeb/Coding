/* 589. N 叉树的前序遍历
给定一个 N 叉树，返回其节点值的 前序遍历 。

N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。


进阶：

递归法很简单，你可以使用迭代法完成此题吗? 

提示：

N 叉树的高度小于或等于 1000
节点总数在范围 [0, 10^4] 内

*/


/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**方法一：递归法
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];          //结果集

    function dfs(root) {
        if(root) {
            res.push(root.val);   //先访问根节点，再访问孩子节点
            root.children.forEach(child => {
                dfs(child);
            })
        }
    }

    dfs(root);
    return res;
};

var preorder = function(root) {
    const res = [];

    function dfs(root) {
        if(root) {
            res.push(root.val);
            root.children.forEach(child => {
                dfs(child);
            })
        }
    }

    dfs(root);
    return res;
}


//迭代法：
var preorder = function(root) {
    if (root === null) {
        return [];
    }
    let res = [];
    let stack = [root];
    while (stack.length) {
        let len = stack.length;
        let node = stack.shift(); // 弹出栈中第一个，先进先出
        res.push(node.val);
        if (node.children.length > 0) {
            stack = node.children.concat(stack); 
            // 这里有别于层序遍历，用 node.children 连接 queue，而不是 queue.concat(node.children)这样就实现了前序遍历的效果
        }
    }
    return res;
};



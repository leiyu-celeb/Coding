/* 590. N 叉树的后序遍历

给定一个 N 叉树，返回其节点值的 后序遍历 。

N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。


进阶：

递归法很简单，你可以使用迭代法完成此题吗? */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**解法一 递归法
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];

    function traverse(root) {
        if(root) {
            root.children.forEach(child => {     //遍历root节点的N个孩子节点
                traverse(child);
            })
            res.push(root.val);      //放在遍历最后面，即后序遍历(所有孩子访问完，再来访问根节点)    
        }
    }

    traverse(root);
    return res;
};


var postorder = function(root) {
    const res = [];

    function traverse(root) {
        if(root) {
            root.children.forEach(child => {
                traverse(child);
            });
            res.push(root.val);
        }
    }

    traverse(root);
    return res;
}



/**解法二 迭代法
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) {
        return [];
    }
    let res = [];      //结果集
    let stack = [root];          //定义一个栈，根节点进栈
    while (stack.length) {       //栈不空
        let node = stack.pop() // 弹出最后面的一个元素
        if (node.children.length > 0) {
            stack = stack.concat(node.children);
        }
        res.unshift(node.val); // 节点先进后出，数值压栈存储
    }
    return res;
};




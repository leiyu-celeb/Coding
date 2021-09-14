/* 257. 二叉树的所有路径
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3 
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
 * @return {string[]}
 */
//方法一：深度优先搜索
var binaryTreePaths = function(root) {
    let result = [];

    function dfs(root, path) {
        if(root) {
            path += root.val.toString();          //字符串拼接

            if(!root.left && !root.right) {        //遇到叶子节点，说明当前路径已经走完了，添加到结果集中
                result.push(path);
            }else{                       //未走完，则递归调用左子树和右子树
                path += "->";
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    }

    dfs(root, "");         //递归入口
    return result;
};
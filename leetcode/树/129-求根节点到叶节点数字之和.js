/* 129. 求根节点到叶节点数字之和
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。
叶节点 是指没有子节点的节点。


示例 1：

输入：root = [1,2,3]
输出：25

解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25 

提示：

树中节点的数目在范围 [1, 1000] 内
0 <= Node.val <= 9
树的深度不超过 10

*/


/**方法一：DFS
 * @param {TreeNode} root
 * @return {number}
 */
const dfs = function(root, prevSum) {
    if(!root) return 0;
    let sum = prevSum * 10 + root.val;      //记录和
    if(!root.left && !root.right) {    //叶子节点
        return sum;
    }else {
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
}


var sumNumbers = function(root) {
    return dfs(root, 0);
};
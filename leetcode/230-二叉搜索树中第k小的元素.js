/* 230. 二叉搜索树中第K小的元素

给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

提示：

树中的节点数为 n 。
1 <= k <= n <= 10^4
0 <= Node.val <= 10^4
 

进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = 0;   //保存中序遍历第k个节点的值
    const inorderTraverse = (node) => {
        if(node){
            //中序遍历的模板
            inorderTraverse(node.left);

            k--;    //每访问一个节点，k减一
            if(k === 0){     //访问到第k个节点时，k已经减为零
                res = node.val;      //保存中序遍历第k个节点的值给res
                return;
            }

            inorderTraverse(node.right);
        }
    }
    inorderTraverse(root);
    return res;
};

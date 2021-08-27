/* 剑指 Offer 26. 树的子结构

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A 中有出现和 B 相同的结构和节点值。

例如:
给定的树 A:

     3
    / \
   4   5
  / \
 1   2
 
给定的树 B：

   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

示例 1：

输入：A = [1,2,3], B = [3,1]
输出：false

示例 2：

输入：A = [3,4,5,1,2], B = [4,1]
输出：true

限制：
0 <= 节点个数 <= 10000 */

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
//方法一：递归法
var isSubStructure = function(A, B) {
    if(!A || !B) {
        return false;        //约定空树不是任意一个树的子结构
    }
    return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B); 
};

var isSameTree = function(A, B) {
    // B子树是空子树 ok
    if(!B) {
        return true;
    }
    // A子树是空子树 且 B 非空，不 ok
    if(!A) {
        return false;
    }
    // 当前节点的值不相等，不 ok
    if(A.val !== B.val) {
        return false;
    }
    // 递归考察左子树、右子树
    return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};

/* 100. 相同的树

给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

提示：

两棵树上的节点数目都在范围 [0, 100] 内
-10^4 <= Node.val <= 10^4 
*/

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true;     //空树为true
    if((p && !q) || (!p && q)) return false;      //根节点有一个不空，返回false
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    } else if (p.val != q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}

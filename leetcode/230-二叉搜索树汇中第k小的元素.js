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
        if(node != null && k > 0){
            //中序遍历的模板
            inorderTraverse(node.left);

            k--;    //每访问一个节点，k减一
            if(k == 0){     //访问到第k个节点时，k已经减为零
                res = node.val;
                return;
            }

            inorderTraverse(node.right);
        }
    }
    inorderTraverse(root);
    return res;
};
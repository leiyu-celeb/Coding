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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root == null) {
        root = new TreeNode(val);
        return root;
    }
    if(root.val < val)  
        root.right = insertIntoBST(root.right, val);
    if(root.val > val)  
        root.left = insertIntoBST(root.left, val);

    return root;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length == 0){ //数组为空时，返回null
         return null;
    }
    let max = Math.max(...nums); //求最大值max
    let root = new TreeNode(max); //构造根节点root
    //递归调用左子树和右子树
    root.left = constructMaximumBinaryTree(nums.slice(0, nums.indexOf(max)));
    root.right = constructMaximumBinaryTree(nums.slice(nums.indexOf(max) + 1));
    return root;
};
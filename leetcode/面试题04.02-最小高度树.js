/* 面试题 04.02. 最小高度树
给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。

示例:
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

          0 
         / \ 
       -3   9 
       /   / 
     -10  5 
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//方法一：中序遍历，总是选择中间位置左边的数字作为根节点
const buildBST = function(nums, left, right) {
    if(left > right) {    //递归出口
        return null;
    }
    let mid = Math.floor((left + right) / 2);     //总是选择中间位置左边的数字作为根节点
    let root = new TreeNode(nums[mid]);      //构造二叉搜索树的根节点
    root.left = buildBST(nums, left, mid - 1);
    root.right = buildBST(nums, mid + 1, right);
    return root;
}

var sortedArrayToBST = function(nums) {
    return buildBST(nums, 0, nums.length - 1);   //递归入口
};



const buildBST = function(nums, left, right) {
    if(left > right) {
        return null;
    }
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildBST(nums, left, mid - 1);
    root.right = buildBST(nums, mid + 1, right);
    return root;
}


var sortedArrayToBST = function(nums) {
    return buildBST(nums, 0, nums.length - 1);
}
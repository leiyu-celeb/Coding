/* 108. 将有序数组转换为二叉搜索树

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。


提示：

1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums 按 严格递增 顺序排列 
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


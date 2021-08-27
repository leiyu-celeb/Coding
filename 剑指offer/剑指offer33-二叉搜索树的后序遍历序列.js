/* 剑指 Offer 33. 二叉搜索树的后序遍历序列
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 
参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3

示例 1：

输入: [1,6,3,2,5]
输出: false

示例 2：

输入: [1,3,2,6,5]
输出: true
 

提示：

数组长度 <= 1000 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
//思路：递归分治法
var verifyPostorder = function (postorder) {
    let len = postorder.length;
    if (len < 2) return true;    // 若为空或为叶子节点，则返回 true

    let rootVal = postorder[len - 1];   // 后序遍历的最后一个元素为根节点
    let i = 0;
    // 划分左/右子树
    for (; i < len - 1; i++) {
        if (postorder[i] > rootVal) break;        //0到i-1位置为左子树，i到len-2为右子树
    }
    // 判断右子树中的元素是否都大于 rootVal，此处用到 every (数组 API，数组的每个元素都返回 true 则整体返回 true)
    let result = postorder.slice(i, len - 1).every(x => x > rootVal);
    if (result) {
        // 对左右子树进行递归调用, 左右子树通过 i 进行分割
        return verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i, len - 1));
    } else {
        return false;
    }
};


var verifyPostorder = function(postorder) {
    let len = postorder.length;
    if(len < 2) return true;

    let rootVal = postorder[len - 1];
    let i = 0;
    for(; i < len - 1; i++) {
        if(postorder[i] > rootVal) break;
    }
    let result = postorder.slice(i, len - 1).every(item => item > rootVal);
    if(result) {
        return verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i, len - 1));
    }else{
        return false;
    }
}
/* 75. 颜色分类
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，
使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

 
示例 1：
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]

示例 2：
输入：nums = [2,0,1]
输出：[0,1,2]

示例 3：
输入：nums = [0]
输出：[0]

示例 4：
输入：nums = [1]
输出：[1]
 

提示：
n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2 

进阶：
1.你可以不使用代码库中的排序函数来解决这道题吗？
2.你能想出一个仅使用常数空间的一趟扫描算法吗？
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//方法二：双指针
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;
    for(let i = 0; i <= right; i++) {
        while(i <= right && nums[i] === 2) {      //遇到2就和right处的元素交换
            swap(nums, i, right);
            right--;
        }
        if(nums[i] === 0){  //遇到0与left处的元素交换
            swap(nums, i, left);
            left++;
        }
    }
};

const swap = function(nums, i, j) {   //交换数组nums位置i与j处的元素
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var sortColors = function(nums) {
    let left = 0, right = nums.length - 1;
    for(let i = 0; i <= right; i++) {
        while(i <= right && nums[i] === 2) {
            swap(nums, i, right);
            right--;
        }
        if(nums[i] === 0) {
            swap(nums, i, left);
            left++;
        }
    }
}

var swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}




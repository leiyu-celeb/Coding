/* 31. 下一个排列
实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须 原地 修改，只允许使用额外常数空间。

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]

示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]

示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]

示例 4：

输入：nums = [1]
输出：[1]
 
提示：

1 <= nums.length <= 100
0 <= nums[i] <= 100 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//方法一：原地解法
var nextPermutation = function(nums) {
    let i = nums.length - 2;                   // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
    while (i >= 0 && nums[i] >= nums[i + 1]) { // 寻找第一个小于右邻居的数
        i--;
    }
    if (i >= 0) {                             // 这个数在数组中存在，从它身后挑一个数，和它换
        let j = nums.length - 1;                // 从最后一项，向左遍历
        while (j >= 0 && nums[j] <= nums[i]) {  // 寻找第一个大于 nums[i] 的数
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
    }
    // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
    let l = i + 1;           
    let r = nums.length - 1;
    while (l < r) {                            // i 右边的数进行翻转，使得变大的幅度小一些
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }   
}


//方法二：非原地解法
// var nextPermutation = function(nums) {
//     let arr = permute(nums);
//     let res =  arr.map(item => item =  Number(item.join('')) );
//     let target = Number(nums.join(''));
//     res.sort((a, b) => a - b);
//     let currIndex = res.indexOf(target);
//     if(currIndex !== res.length - 1) {
//         return (res[currIndex + 1]).toString().split('').map(item => item = Number(item));
//     }else{
//         return (res[0]).toString().split('').map(item => item = Number(item));
//     }
// };

// var permute = function(nums) {
//     let result = [];      //结果集
//     let used = {};
//     const dfs = function(path){
//         if(path.length === nums.length){     //个数选够了
//             result.push(path.slice());      //拷贝一份path，加入结果集result
//             return;
//         }
//         for(let num of nums){  //遍历可选的选项
//             if(used[num]) continue;      //用过则跳过本次循环，排除不合法的选择
//             path.push(num);       //没用过，做选择
//             used[num] = true;     //标记为使用过
//             dfs(path);            //递归，进入下一层决策树
//             path.pop();           //上一句的递归结束，回溯，取消选择  
//             used[num] = false;     //更新为未使用过
//         }
//     }
//     dfs([]);
//     return result;
// };


let nums = [1,2,3];

console.log(nextPermutation(nums));
/* 2021/1/5
1636. 按照频率将数组升序排序
给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。 
请你返回排序后的数组。

示例 1：
输入：nums = [1,1,2,2,2,3]
输出：[3,1,1,2,2,2]
解释：'3' 频率为 1，'1' 频率为 2，'2' 频率为 3 。

示例 2：
输入：nums = [2,3,1,3,2]
输出：[1,3,3,2,2]
解释：'2' 和 '3' 频率都为 2 ，所以它们之间按照数值本身降序排序。

示例 3：
输入：nums = [-1,1,-6,4,5,-6,1,4,1]
输出：[5,-1,4,4,-6,-6,1,1,1]
 

提示：
1 <= nums.length <= 100
-100 <= nums[i] <= 100 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    var map = new Map();     //map key存数组元素， value 存出现次数
    for(let i = 0; i < nums.length; i++){
      if(map.get(nums[i])){
        map.set(nums[i], map.get(nums[i]) + 1);
      }else {
        map.set(nums[i], 1);
      }
    }
    var arrayObj=Array.from(map);     //map转为数组
    arrayObj.sort(function(a, b) {     //sort排序，自定义排序规则
        return ((a[1] - b[1]) > 0) ? 1 : (a[1] - b[1]) == 0 ? (b[0] - a[0]) : -1;
    })
    var ans = [];
    for(let i = 0; i < arrayObj.length; i++){
      while(arrayObj[i][1]--){
        ans.push(arrayObj[i][0]);
      }
    }
    return ans; 

};
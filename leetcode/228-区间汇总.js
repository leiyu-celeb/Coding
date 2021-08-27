/* 2021/1/10
228. 汇总区间
给定一个无重复元素的有序整数数组 nums 。
返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。
也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

列表中的每个区间范围 [a,b] 应该按如下格式输出：

"a->b" ，如果 a != b
"a" ，如果 a == b
 

示例 1：
输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

示例 2：
输入：nums = [0,2,3,4,6,8,9]
输出：["0","2->4","6","8->9"]
解释：区间范围是：
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

示例 3：
输入：nums = []
输出：[]

示例 4：
输入：nums = [-1]
输出：["-1"]

示例 5：
输入：nums = [0]
输出：["0"]
 

提示：
0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
nums 中的所有值都 互不相同
nums 按升序排列
 */


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length == 0)  return [];
    let left = nums[0];      //初始化left为数组第一个元素, left始终指向序列第一个元素
    let right = nums[0];     //初始化right为数组第一个元素，right结束时指向序列最后一个元素
    let arr = [];            //保存结果的数组arr
    for(let i = 0; i < nums.length; i++){      //遍历数组nums
        if(nums[i] == nums[i+1] - 1){      //下一个元素能连上
            right++;
        }else{          //当索引为i的元素为本次序列的最后一位
            if(left == right){                //前后都不连续
                arr.push(left + " ");         //插入区间为自己本身
                left = nums[i + 1];         //把序列头部left更新为下一个数组元素
                right = nums[i + 1];        //把right也更新为下一个数组元素        
            }else{
                arr.push(left+ "->" + right);    //插入当前序列的区间
                left = nums[i + 1];  //把序列头部left更新为下一个数组元素
                right = nums[i + 1]; //把right也更新为下一个数组元素
            }
        }   
    }
    return arr;
};

let nums = []
console.log(summaryRanges(nums));
/* 912. 排序数组

给你一个整数数组 nums，请你将该数组升序排列。

示例 1：
输入：nums = [5,2,3,1]
输出：[1,2,3,5]

示例 2：
输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 
提示：
1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1.数组sort方法
var sortArray = function(nums) {
    return nums.sort((a, b) => a - b);
};

// 2.快速排序
var sortArray = function(nums) {
    return quickSort(nums);
}

var quickSort = function(nums) {
    if(nums.length <= 1) return nums;
    let left = [], right = [];
    let midIndex = Math.floor(nums.length / 2);
    let midVal = nums.splice(midIndex, 1)[0];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < midVal) {
          left.push(nums[i]);
        }else{
          right.push(nums[i]);
        }
    }
    return quickSort(left).concat(midVal, quickSort(right));
}

// 3.归并排序
let sortArray = function(nums) {
    let len = nums.length;
    if (len === 1) return nums;
    let mid = len / 2;
    let left = nums.slice(0, mid);
    let right = nums.slice(mid, len);
    return merge(sortArray(left), sortArray(right));
}

let merge = function(left, right) {
    let result = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left[0]);
            left.splice(0, 1);
        } else {
            result.push(right[0]);
            right.splice(0, 1);
        }
    }
    return result.concat(left).concat(right);
}
  

// 4.堆排序



// 5.1冒泡排序 （单向）
var sortArray = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        // i表示已经排序好的个数
        for(let j = 0; j < nums.length - 1 - i; j++) {
            if(nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
};


// 5.2冒泡排序（双向）
var sortArray = function(nums) {
    let low = 0
    let high = nums.length - 1
    while(low < high) {
        // 找到最大值放右边
        for (let i =low;i<nums.length-1;i++) {
            if(nums[i] > nums[i+1]) {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
            }
        }
        high--;
        // 找到最小值放左边
        for(let j = high;j>low;j--) {
            if (nums[j] < nums[j-1]) {
                [nums[j],  nums[j-1]] = [nums[j-1], nums[j]]
            }
        }
        low++;
    }
    return  nums
};


// 6.选择排序 O(n^2)
var sortArray = function(nums) {
    for(let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            // 将nums[i]与后面的元素比较，一直维持num[i]最小
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
  return nums
};

// 7.插入排序
var sortArray = function(nums) {
    for(let i = 1,len = nums.length;i<len;i++) {
        const temp = nums[i]
        let j = i
        // 最小的放前面
        while(j > 0 && temp < nums[j-1]) {
            nums[j] = nums[j-1]
            j--
        }
        nums[j] = temp
    }
    return nums
};

/* 349. 两个数组的交集
给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]


说明：
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。 
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [...set1].filter(item => set2.has(item));
};


// Set  时间复杂度 filter + includes: O(m * n), 空间复杂度O(m)
var intersection = function(nums1, nums2) {
   return [...new Set(nums1.filter(item => nums2.includes(item)))];
}


// 使用Map  时间复杂度O(m + n), 空间复杂度：O(m)
var intersection = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(item => { 
        map.set(item, true);
    });
    const res = [];
    nums2.forEach(item => {
        if(map.get(item)) {
            res.push(item);
            map.delete(item);
        }
    });
    return res;
}


// 排序 + 双指针  (官方解法)
// 时间复杂度：O(mlogm + nlogn)  空间复杂度：O(logm + logn)
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    const length1 = nums1.length, length2 = nums2.length;
    let index1 = 0, index2 = 0;
    const result = [];
    while (index1 < length1 && index2 < length2) {
        const num1 = nums1[index1], num2 = nums2[index2];
        if (num1 === num2) {
            // 保证加入元素的唯一性
            if (!result.length || num1 !== result[result.length - 1]) {
                result.push(num1);
            }
            index1++;
            index2++;
        } else if (num1 < num2) {
            index1++;
        } else {
            index2++;
        }
    }
    return result;
};

//排序 + 双指针
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let length1 = nums1.length, length2 = nums2.length;
    const res = [];
    let index1 = 0, index2 = 0;
    while(index1 < length1 && index2 < length2) {
        if(nums1[index1] === nums2[index2]) {
            if(!res.length || nums1[index1] !== res[res.length - 1]) {
                res.push(nums1[index1]);
            }
            index1++;
            index2++;
        }else if(nums1[index1] < nums2[index2]) {
            index1++;
        }else{
            index2++;
        }
    }
    return res;
}

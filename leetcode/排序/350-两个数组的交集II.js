/* 350. 两个数组的交集 II
给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
 

说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

进阶：
1.如果给定的数组已经排好序呢？你将如何优化你的算法？
2.如果 nums1 的大小比 nums2 小很多，哪种方法更优？
3.如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？


答：
1）如果给定数组已经排好序，使用双指针的方法；
2）如果nums1的大小比nums2小很多，哈希法更优，因为只对小数组进行哈希，空间复杂度较小；
3）如果nums2的元素存储在磁盘上，内存有限，只能使用哈希法，因为双指针是要求排好序，如果无法全部装进内存，排序很难做到；
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//方法一：哈希法
var intersect = function(nums1, nums2) {
    const temp = {};
    const res = [];
    for(let num1 of nums1) {
        if(!temp[num1]) {
            temp[num1] = 1;
        }else{
            temp[num1]++;
        }
    }
    for(let num2 of nums2) {
        if(temp[num2] > 0) {
            res.push(num2);
            temp[num2]--;
        }
    }
    return res;
}



//方法二：排序 + 双指针
var intersect = function(nums1, nums2){
    nums1.sort((a, b) => a - b);           //先对两个数组进行升序排序
    nums2.sort((a, b) => a - b);
    let p = 0, q = 0;                  //p遍历数组nums1, q遍历数组nums2
    let result = [];
    while(p < nums1.length && q < nums2.length){ 
        if(nums1[p] < nums2[q]){
            p++;
        }else if(nums1[p] > nums2[q]){
            q++;
        }else{
            result.push(nums1[p]);
            p++;
            q++;
        }
    }
    return result;
}


var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let index1 = 0, index2 = 0;
    const result = [];
    while(index1 < nums1.length && index2 < nums2.length) {
        if(nums1[index1] < nums2[index2]) {
            index1++;
        }else if(nums1[index1] > nums2[index2]) {
            index2++;
        }else{
            result.push(nums1[index1]);
            index1++;
            index2++;
        }
    }
    return result;
}








/**
 * --- 测试用例 ---
 *
 * 输入：[1, 34, 5, 76, 8, 6, 9, 7, 6, 3]
 * 输出：[1, 3, 5, 6, 6, 7, 8, 9, 34, 76]
 *
 * --- 说明 ---
 * 
 * 思考：快速排序是稳定的吗？
 * 解答：base 的每次选择，会导致快排是不稳定排序。
 */

const quickSort = (nums) => {
    if (nums.length < 2) {
        return nums;
    } else {
        var left = [];
        var right = [];
        var pivot = Math.floor(nums.length / 2); // Math.floor 向下取整
        var base = nums.splice(pivot, 1)[0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < base) {
                left.push(nums[i]);
            } else {
                right.push(nums[i]);
            }
        }
    }
    return quickSort(left).concat([base], quickSort(right));
}









/**
 * --- 测试用例 ---
 *
 * 输入：[5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3]
 * 输出：[2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9]
 *
 * --- 说明 ---
 * 
 * 思考：冒泡排序是稳定的吗？
 * 解答：稳定。相等的元素不发生交换
 */

const bubbleSort = (nums) => {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return nums;
}


/**
 * --- 测试用例 ---
 *
 * 输入：[6, 45, 3, 2, 5, 6, 8, 4, 3, 4, 56, 67, 5]
 * 输出：[2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 45, 56, 67]
 *
 * --- 说明 ---
 * 
 * 思考：选择排序是稳定的吗？
 * 解答：要看代码是如何实现的，在本例中由于有交换，所以是不稳定排序。
 */

const selectSort = (nums) => {
    var idx; // 最小值的索引
    for (var i = 0; i < nums.length - 1; i++) {
        idx = i;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[idx]) {
                idx = j;
            }
        }
        if (nums[i] > nums[idx]) {
            let tmp = nums[idx];
            nums[idx] = nums[i];
            nums[i] = tmp;
        }
    }
    return nums;
}

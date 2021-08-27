/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] == target) {
            return mid;
        }
        /***
         * 如果中间的数小于最右边的数，
         * 则右半段是有序的，
         * 若中间数大于最右边数，
         * 则左半段是有序的
         * */
        if (nums[mid] < nums[right]) {
        /**
         * 有序的半段里用首尾两个数组来判断目标值是否在这一区域内，
         * 这样就可以确定保留哪半边了
         */
            if (nums[mid] < target && nums[right] >= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] > target && nums[left] <= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};


let nums = [228,234,235,236,238,239,240,241,242,243,245,248,250,253,256,257,258,260,261,262,263,264,266,268,271,272,275,276,279,280,281,282,283,284,285,287,289,291,294,295,1,6,7,8,9,10,11,13,14,15,17,18,19,20,21,22,23,25,28,30,31,36,41,43,46,48,51,52,53,54,58,59,60,62,64,66,68,72,73,77,85,86,89,92,94,95,97,98,101,105,108,112,116,118,120,121,122,124,125,127,128,129,130,131,132,135,137,139,140,142,145,147,149,152,154,156,157,158,159,168,169,170,171,172,176,178,182,185,188,190,195,200,201,202,203,204,206,208,210,212,216,219,224,226]

let target = 266;

console.log(search(nums, target));


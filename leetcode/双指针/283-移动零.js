/* 2020/12/25
283. 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。 
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     let len = nums.length;
//     nums = nums.filter(item => item != 0);
//     let gap = len - nums.length;
//     for(let i = 0; i < gap; i++){
//         nums.push(0);
//     }
// };

// var moveZeroes = function(nums) {
//     let len = nums.length;   //3
//     for(let i = 0; i < len; i++){
//         if(nums[i] == 0){
//             nums.splice(i, 1);
//         }
//     }
//     let gap = len - nums.length;
//     for(let i = 0; i < gap; i++){
//         nums.push(0);
//     }
//     console.log(nums);
// };

//方法一：数组splice和push方法
// var moveZeroes = function(nums) {
//     let len = nums.length;    //数组的初始长度len
//     let i = 0;               //循环变量i初始化为0
//     let count = 0;           //遍历次数count等于len时，退出循环
//     while(i < len && count < len){        
//         if(nums[i] == 0){         //当前数组元素为0
//             nums.splice(i, 1);    //把0元素删除
//             nums.push(0);         //尾部补0 
//             count++;               //遍历次数+1 
//         } else {                   //当前数组元素不为0
//             i++;                 //索引后移一位
//             count++;              //遍历次数+1  
//         }
//     }  
// };

//sort方法
var moveZeroes = function(nums) {
    return nums.sort((a, b) => b ? 0 : -1)
}


//双指针
var moveZeroes = function(nums) {  
    let left = 0, right = 0;     //左右两个指针left 和 right
    let len = nums.length;       //数组长度len
    let temp = 0;               //用于交换两个数组元素的临时变量temp
    while(right < len){          //没有遍历完
        if(nums[right] != 0){      //遇到非0元素
            if(left < right){      //如果left和right不在同一位置，就相互交换
                temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
            }
            left++;    
        }
        right++;
    }    
};


let nums = [0, 0, 1];

moveZeroes(nums);



var moveZeroes = function(nums) {
    let left = 0, right = 0;
    let temp = 0;
    while(right < nums.length) {
        if(nums[right] !== 0) {
            if(left < right) {
                temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
            }
            left++;
        }
        right++;
    }
}

var moveZeroes = function(nums) {
    let left = 0, right = 0;
    let temp = 0;
    while(right < nums.length) {
        if(nums[right] !== 0) {
            if(left < right) {
                temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
            }
        }
        right++;
    }
}





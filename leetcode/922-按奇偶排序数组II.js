/* 2021/1/6
922. 按奇偶排序数组 II
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
你可以返回任何满足上述条件的数组作为答案。

示例：
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 

提示：
2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000 */



/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let arrOdd = [], arrEven = [];       //两个数组分别装奇数和偶数
    for(let item of A){
        if(item % 2 ==0){
            arrEven.push(item);
        }else{
            arrOdd.push(item);
        }
    }
    let len = A.length;
    let arr = [];
    let j = 0, k = 0; 
    for(let i = 0; i < len; i++){    //一个一个插入到新数组中
        if(i % 2 == 0){
            arr.push(arrEven[j++]);
        }else{
            arr.push(arrOdd[k++]);
        }
    }
    return arr;
};


// 方法二： 两次遍历
// 遍历一遍数组把所有的偶数放进 ans[0]，ans[2]，ans[4]，依次类推。
// 再遍历一遍数组把所有的奇数依次放进 ans[1]，ans[3]，ans[5]，依次类推。
// var sortArrayByParityII = function(A) {
//     let ans = [];     //存放排序后的数组
//     let i = 0;
//     for(let item of A){ //第一次遍历，把偶数放在偶数索引位上
//         if(item % 2 ==0){
//             ans[i] = item;
//             i += 2;
//         }
//     }
//     let j = 1;
//     for(let item of A){ //第二次遍历，把奇数放在奇数索引位上
//         if(item % 2 != 0){
//             ans[j] = item;
//             j += 2;
//         }
//     }
//     return ans;
// };

//方法三：双指针
const swap = (A, i, j) => {    //交换A[i] 和 A[j]
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
};
var sortArrayByParityII = function(A) {
    const n  = A.length;
    let j = 1;
    for (let i = 0; i < n; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2;
            }
            swap(A, i, j);
        }
    }   
    return A;
};


let A = [4,2,5,7];

console.log(sortArrayByParityII(A));
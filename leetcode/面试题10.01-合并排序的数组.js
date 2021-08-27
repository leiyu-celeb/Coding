/* 2021/1/4
面试题 10.01. 合并排序的数组
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:
输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

说明:
A.length == n + m */


/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
// var merge = function(A, m, B, n) {
//     A.splice(m, n, ...B);
//     A.sort((a, b) => a - b);
// };

//方法二：
var merge = function(A, m, B, n) {
    let index1 = m - 1;       //指向原A数组最后一个元素
    let index2 = n - 1;       //指向原B数组最后一个元素  
    let tail = m + n -1;      //尾指针
    while(index2 >= 0){        //只要B数组还有元素  
        if(A[index1] > B[index2]){      //A对应的元素大，放入tail处，同时tail, index1 左移
            A[tail] = A[index1];       
            tail--;
            index1--;
        }else{             //B对应的元素大于等于A对应的元素，放入tail处，同时tail, index2 左移
            A[tail] = B[index2];
            tail--;
            index2--;
        }
    } 
};

let A = [1,2,3,0,0,0], m = 3, B = [2,5,6], n = 3;

console.log(merge(A, m, B, n));


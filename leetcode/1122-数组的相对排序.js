/* 2021/1/6
1122. 数组的相对排序
给你两个数组，arr1 和 arr2，
arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 
示例：
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
 
提示：
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中 
*/


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// var relativeSortArray = function(arr1, arr2) {
//     let inner = arr1.filter( item => arr2.includes(item));     //在arr1中，也在arr2中的元素 inner数组
//     let outer = arr1.filter( item => !arr2.includes(item));    //在arr1中，但不在arr2中的元素  outer数组
//     outer.sort((a, b) => a - b);                               //升序排序
//     inner.sort((a, b) => {                  //按照在arr2中出现的顺序排序，indexOf可以返回该元素第一次出现的索引
//         return arr2.indexOf(a) - arr2.indexOf(b);
//     });
//     inner.push(...outer);   //尾部插入outer数组
//     return inner;
// };

var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a, b) => {    //自定义 compareFunction 按照指定要求排序
        let index_a = arr2.indexOf(a);
        let index_b = arr2.indexOf(b);
        if(index_a == -1 && index_b == -1){  //a和b都不在arr2中，按照数值升序排序
            return a - b;
        }else if(index_a == -1){  //a不在arr2中，return 1 (> 0) 表示a要排在b的后面
            return 1;
        }else if(index_b == -1){  //b不在arr2中，return -1 (< 0) 表示a要排在b的前面
            return -1;
        }else{                 //a和b都在arr2中，则按照在arr2中的顺序排序
            return index_a - index_b;
        }
    })
};

arr1.sort((a, b) => a - b);



let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];

console.log(relativeSortArray(arr1, arr2));
 
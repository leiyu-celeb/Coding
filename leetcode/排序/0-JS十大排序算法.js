//冒泡排序：
const arr = [7, 8, 4, 5, 6, 3, 2, 1,19,5,6,2,10,101,0,-2,-1,6];


// const bubbleSort = function(arr){
//     const len = arr.length;
//     if(len <= 1) return arr;
//     for(let i = 0; i < len - 1; i++){
//         let flag = false;
//         for(let j = 0; j < len - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 flag = true;
//             }
//         }
//         if(!flag)  break;
//     }
//     console.log(arr);
// }

// console.log(bubbleSort(arr));


//快速排序：

// const quickSort1 = arr => {
// 	if (arr.length <= 1) {
// 		return arr;
// 	}
// 	//取基准点
// 	const midIndex = Math.floor(arr.length / 2);
// 	//取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
// 	const valArr = arr.splice(midIndex, 1);
// 	const midIndexVal = valArr[0];
// 	const left = []; //存放比基准点小的数组
// 	const right = []; //存放比基准点大的数组
// 	//遍历数组，进行判断分配
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < midIndexVal) {
// 			left.push(arr[i]); //比基准点小的放在左边数组
// 		} else {
// 			right.push(arr[i]); //比基准点大的放在右边数组
// 		}
// 	}
// 	//递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
// 	return quickSort1(left).concat(midIndexVal, quickSort1(right));
// };
// const array2 = [5, 4, 3, 2, 1];
// console.log('quickSort1 ', quickSort1(array2));   // quickSort1: [1, 2, 3, 4, 5]


// const quickSort = (arr) => {
//     if(arr.length <= 1) return arr;
    
//     let midIndex = Math.floor(arr.length / 2);
//     let midVal = arr.splice(midIndex, 1)[0];
//     let left = [];
//     let right = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < midVal){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat(midVal, quickSort(right));
// }



const quickSort = function(arr) {
    if(arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let midVal = arr.splice(midIndex, 1)[0];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < midVal){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(midVal, quickSort(right))
}



const quickSort = function(arr) {
    if(arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let midVal = arr.splice(midIndex, 1)[0];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < midVal){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(midVal, quickSort(right));
}



const quickSort = function(arr) {
    if(arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let midVal = arr.splice(midIndex, 1)[0];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < midVal) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }   
    }
    return quickSort(left).concat(midVal, quickSort(right));
}










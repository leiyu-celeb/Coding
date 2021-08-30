/* 2021/1/13
875. 爱吃香蕉的珂珂
珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

示例 1：
输入: piles = [3,6,7,11], H = 8
输出: 4

示例 2：
输入: piles = [30,11,23,4,20], H = 5
输出: 30

示例 3：
输入: piles = [30,11,23,4,20], H = 6
输出: 23 

*/

/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    // 根据题意，一个小时最少吃1根香蕉，最多吃max(piles)根香蕉，因此K的取值为[1, max(piles)]
    // 连续区间线性查找问题，利用二分查找优化查找效率
    let left = 1, right = Math.max(...piles) + 1;
    while(left < right){
        let mid = Math.floor((right - left) / 2) + left;
        if(canFinish(piles, mid, H)){ //能在H小时吃掉所有香蕉, 于是考虑是否可以得到一个更小的speed，然后将right = mid
            right = mid;
        } else {    //速度为mid时，吃不完所有香蕉时，速度要加快，因此left = mid + 1，搜索区间调整为右边
            left = mid + 1;
        }
    }
    return left;
};

const canFinish = function(piles, speed, H){
    let time = 0;
    for(let heap of piles){
        time += Math.floor(heap / speed) + ( (heap % speed > 0) ? 1 : 0) ;
    }
    if(time <= H){ //能在H小时内吃掉所有香蕉
        return true;
    }else{
        return false;
    }
}

var minEatingSpeed = function(piles, H) {
    let left = 1, right = Math.max(...piles) + 1;
    while(left < right) {
        let mid = Math.floor((right - left) / 2) + left;
        if(canFinish(piles, mid, H)) {
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return left;
}

var canFinish = function(piles, speed, H) {
    let time = 0;
    for(let heap of piles) {
        timer += Math.floor(heap / speed) + (heap % speed > 0 ? 1 : 0);
    }
    return time <= H;
}


let piles = [3,6,7,11], H = 8;
console.log(minEatingSpeed(piles, H));

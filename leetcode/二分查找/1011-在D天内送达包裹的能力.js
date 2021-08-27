/* 2021/1/13
1011. 在 D 天内送达包裹的能力
传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

 

示例 1：

输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 
示例 2：

输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4
示例 3：

输入：weights = [1,2,3,1,1], D = 4
输出：3
解释：
第 1 天：1
第 2 天：2
第 3 天：3
第 4 天：1, 1
 

提示：

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500 */


/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    //由题意，船的最低运载能力取值范围为[max(weights), sum(weights)];
    //则可以转换成，求船在D天内能将所有包裹送达的最低运载能力
    //用二分查找的思想
    let left = Math.max(...weights);
    let right = weights.reduce((prev, curr) => prev + curr) + 1;
    let mid;
    while(left < right){
        mid = left + Math.floor((right - left) / 2);
        if(canFinish(weights, mid, D)){
            right = mid;
        }else{
            left = mid + 1;
        }
    } 
    return left;
};

//载重为capacity, 能否在D天内运完weights包裹数组
const canFinish = function(weights, capacity, D) {
    let count = 0;  //记录运完的包裹数
    let maxCap;
    for(let i = 0; i < D; i++){
        maxCap = capacity; //每次重新运包裹需要情况船舱
        while((maxCap -= weights[count]) >= 0){ //判断船能否还能装下当前的包裹，不能则需要运完清空船舱再来装包裹，能则count++
            count++;
            if(count == weights.length){ //运完的包裹数等于weight.lenght表示全部运完了，并且没有退出循环说明在D天内
                return true;
            }
        }
    }
    return false;
}

let weights = [1,2,3,4,5,6,7,8,9,10], D = 5

console.log(shipWithinDays(weights, D));











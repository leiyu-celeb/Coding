/* 56. 合并区间
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

示例 1：
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

示例 2：
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);         //各区间按照区间左边排序
    let prev = intervals[0];       //prev初始化为第一个区间
    for(let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        if(prev[1] >= curr[0]){ //存在区间重合
            prev[1] = Math.max(prev[1], curr[1]);       //存在重合则区最大范围的右边界，合并之后继续往后判断
        }else{
            result.push(prev);        //如果prev 和 curr不重合，则把prev加入结果集
            prev = curr;           //更新prev
        }
    }
    result.push(prev);            //循环退出时最后一个未加入结果集result
    return result;
};
//当考察完最后一个区间，后面没区间了，遇不到不重合区间，最后的 prev 没推入 res。

let intervals = [[1,4],[1,4]]

console.log(merge(intervals));


var merge = function(intervals) {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    for(let i = 1; i < intervals.length; i++){
        let curr = intervals[i];
        if(prev[1] >= curr[0]){
            prev[1] = Math.max(prev[1], curr[1]);
        }else{
            result.push(prev);
            prev = curr;
        }
    }
    result.push(prev);
    return result;
}




var merge = function(intervals) {
    const result = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    for(let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        if(prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
        }else{
            result.push(prev);
            prev = curr;
        }
    }
    result.push(prev);
    return result;
}

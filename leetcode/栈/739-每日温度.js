/* 739. 每日温度
请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。
如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。 
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
//方法一：暴力法，每个元素找到它右边第一个比它大的元素的位置，求它们的距离，若没有，默认为0
var dailyTemperatures = function(T) {
    const res = new Array(T.length).fill(0);

    for(let i = 0; i < T.length; i++) {
        for(let j = i + 1; j < T.length; j++) {
            if(T[j] > T[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
};


//方法二：单调栈
const dailyTemperatures = (T) => {
    const res = new Array(T.length).fill(0);
    const stack = [];
    for (let i = T.length - 1; i >= 0; i--) {
      while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (stack.length) {
        res[i] = stack[stack.length - 1] - i;
      }
      stack.push(i);
    }
    return res;
}
  
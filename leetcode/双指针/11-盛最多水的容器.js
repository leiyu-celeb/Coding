/* 11. 盛最多水的容器
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。 
*/

/** 本题是一道经典的面试题，最优的做法是使用「双指针」。如果读者第一次看到这题，不一定能想出双指针的做法。*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let max = 0;
    let square = 0;
    while(left < right){
        if(height[left] < height[right]){
            square = height[left] * (right - left);
            left++;
        }else{
            square = height[right] * (right - left);
            right--;
        }
        max = Math.max(max, square);
    }
    return max;
};

var maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let max = 0, square = 0;
  while(left < right) {
    if(height[left] < height[right]) {
      square = height[left] * (right - left);
      left++;
    }else{
      square = height[right] * (right - left);
      right--;
    }
    max = Math.max(max, square);
  }
  return max;
}

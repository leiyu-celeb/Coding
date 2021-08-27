// 方法一：Array.prototype.reverse()
var reverseString = function(s) {
    return s.reverse();
};




//方法二：双指针法，ES6解构赋值的特性  [x, y] = [y, x]用于交换值
var reverseString2 = function(s) {
    let i = 0, j = s.length - 1;
    while(i < j){
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}

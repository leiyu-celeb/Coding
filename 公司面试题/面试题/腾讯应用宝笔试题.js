// 2. 编写代码判断两个日期是否是同一周（可使用MDN查询JS相关日期函数）。 (10分)
// function isSameWeek (d1: Date, d2: Date): boolean {
// // TODO，已知 d2 > d1, 按照周一是一周的第一天的逻辑来算，请实现对应的代码
// }
// console.log(isSameWeek(new Date('2019-09-28'), new Date('2019-09-29')));   // true
// console.log(isSameWeek(new Date('2019-09-29'), new Date('2019-09-30')));   // false


function isSameWeek (d1, d2) {
    var oneday = 1000 * 60 * 60 * 24;       //一天时间的总毫秒数
    var d1Count =  parseInt(d1.getTime() / oneday);   //第一个时间的天数  
    var d2Count =  parseInt(d2.getTime() / oneday);     //第二个时间的天数
    if( parseInt((d1Count + 3) / 7) === parseInt((d2Count + 3) / 7) ){
        return true;
    }else{
        return false;
    }
}

console.log(isSameWeek(new Date('2019-09-28'), new Date('2019-09-29')));   // true
console.log(isSameWeek(new Date('2019-09-29'), new Date('2019-09-30')));   // false



function isSameWeek(d1,  d2){

    var oneDay = 1000 * 60 * 60 * 24;     //一天的毫秒数
    var d1_count = parseInt(d1.getTime() / oneDay);       //天数
    var d2_count = parseInt(d2.getTime() / oneDay);      //天数
    return parseInt((d1_count +  3) / 7) === parseInt((d2_count +  3) / 7);
}
console.log(isSameWeek(new Date('2021-04-09'), new Date('2021-04-12')));   // true

// console.log(isSameWeek(new Date('2019-09-28'), new Date('2019-09-29')));   // true
// console.log(isSameWeek(new Date('2019-09-29'), new Date('2019-09-30')));   // false



// 3. 给定一个大小为n的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于n/2的元素。
//如输入[3, 2, 3]输出3，输入[2, 2, 1, 1, 1, 2, 2]输出2。请用多种方法实现。 (10分)

//方法一：哈希法
var mostElement = function(nums) {
    let half = nums.length / 2;         
    let obj = {};
    for(let num of nums){
        if(!obj[num]){
            obj[num] = 1;
        }else{
            obj[num]++;
        }
        if(obj[num] > half){
            return num;
        }
    }
}

//方法二：排序
var mostElement = function(nums) {
    nums.sort((a, b) => a - b);     //升序排序
    return nums[Math.floor(nums.length / 2)];  
}

//方法三：栈
var mostElement = function(nums) {
    let stack = [];
    for(let num of nums){
        let len = stack.length;
        if(stack[len - 1] === num || len === 0){
            stack.push(num);
        }else{
            stack.pop();
        }
    }
    return stack[0];
}


let nums = [2,2,1,1,1,2,2];
console.log(mostElement(nums));      //2


// 4.写一个程序按箭头顺序在下面矩阵中填入对应数据  (30分)

var triangleLoop = function(n) {
    //生成n * n的二维矩阵
    const arr = new Array(n).fill(null).map(item => item = new Array(n).fill(null));
    //生成四个顶点坐标
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let count = 1;
    while(left <= right && top <= bottom) {
        for(let row = bottom; row >= top; row--){
            arr[row][right] = count++;
        }
        for(let row = top + 1, column = right - 1; row <= bottom, column >= left; row++, column--){
            arr[row][column] = count++;
        }
        for(let column = left + 1; column < right; column++) {
            arr[bottom][column] = count++;
        }
        [left, right, top, bottom] = [left + 2, right - 1, top + 2, bottom - 1];
    }
    return arr;
}


//智力题：
// 5. 一共1000瓶酒，其中一瓶有毒。如果一只老鼠喝了有毒的酒，会在一天之后死亡，那么如果给你一天时间，然你判定哪瓶酒有毒，
// 至少需要几只老鼠 为什么？ (10分)

// 答：10只老鼠，1000瓶酒，可以用10位数来表示

// 开放性题：
// 6. 对于日均访问量巨大的页面，想要设计系统扛住流量，简述各环节（不局限于前端）上可以做哪些措施。 (20分)



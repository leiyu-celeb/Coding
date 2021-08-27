// 2、 如何用 setTimeout 模拟 setInterval？
// 要求 : 需要支持 clearInterval
function fn(){
    console.log(1);
}

function mySetInterval(fn, delay){
    function loop() {   
        setTimeout(loop, delay);
        fn();
    }
    setTimeout(loop, delay);
}

console.log(mySetInterval(fn, 1000));



// 3、 求出 {'a', 'b', 'c', 'd', 'e'} 这五个元素组成集合的所有子集？

let arr = ['a', 'b', 'c', 'd', 'e'];

//DFS, 回溯算法
const subsets = function(arr) {
    const res = []; 
    let n = arr.length;
    const dfs = function(index, path) {
        res.push(path.slice());
        for(let i = index; i < n; i++) {
            path.push(arr[i]);
            dfs(i + 1, path);
            path.pop();
        }
    }
    dfs(0, []);
    return res;
}

console.log(subsets(arr));


// 4、 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度？
// 例如：字符串 “abcabcbb” 的最长子串是 “abc”，所以长度为3。

let str = "abcabcbb";

const getLongest = function(str) {
    let window = {};
    let left = 0, right = 0;
    let maxLen = 0;
    while(right < str.length) {
        let current = str[right];
        right++;
        window[current] ? window[current]++ : window[current] = 1;
        
        while(window[current] > 1){
            let now = str[left];
            left++;
            window[now]--;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
}

console.log(getLongest(str));





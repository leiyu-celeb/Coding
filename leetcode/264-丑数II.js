/* 264. 丑数 II
给你一个整数 n ，请你找出并返回第 n 个 丑数 。
丑数 就是只包含质因数 2、3 和/或 5 的正整数。

示例 1：
输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。

示例 2：
输入：n = 1
输出：1
解释：1 通常被视为丑数。
 
提示：
1 <= n <= 1690 */

/**
 * @param {number} n
 * @return {number}
 */
//方法一：最小堆
var nthUglyNumber = function(n) {
    const factors = [2, 3, 5];
    const seen = new Set();
    const heap = new MinHeap();
    seen.add(1);
    heap.insert(1);
    let ugly = 0;
    for (let i = 0; i < n; i++) {
        ugly = heap.pop();
        for (const factor of factors) {
            const next = ugly * factor;
            if (!seen.has(next)) {
                seen.add(next);
                heap.insert(next);
            }
        }
        
    }
    return ugly;
};

// 最小堆
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return (i - 1) >> 1;
    }

    getLeftIndex(i) {
        return i * 2 + 1;
    }

    getRightIndex(i) {
        return i * 2 + 2;
    }

    shiftUp(index) {
        if(index === 0) { return; }
        const parentIndex = this.getParentIndex(index);
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }  
    }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1]= this.heap[i2];
        this.heap[i2] = temp;
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return this.heap[0];
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}


//方法二：三指针
var nthUglyNumber = function(n) {
    /* 
        丑数的递推性质： 丑数只包含因子 2，3，5，因此有
        “丑数 = 某较小丑数 * 某因子”（例如 10 = 5 * 2）
        dp[i + 1] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5 )
    */

    let a = b = c = 0, // a b c 分为为对应取因子 2 3 5的索引下标
        n2, n3, n5, min
    const dp = [1, ...new Array(n - 1)]

    for (let i = 1; i < n; i++) {
        n2 = dp[a] * 2, n3 = dp[b] * 3, n5 = dp[c] * 5, 
        min = Math.min(n2, n3, n5)

        dp[i] = min

        if (min === n2) a++
        if (min === n3) b++
        if (min === n5) c++
    }

    return dp[n - 1]
};

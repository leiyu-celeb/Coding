/* 剑指 Offer 59 - II. 队列的最大值
请定义一个队列并实现函数 max_value 得到队列里的最大值，
要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1

限制：

1 <= push_back,pop_front,max_value的总操作数 <= 10000
1 <= value <= 10^5 
*/

var MaxQueue = function() {
    this.queue = [];          //保存队列元素
    this.maxQueue = [];           
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.maxQueue.length){
        return this.maxQueue[0];
    }else{
        return -1;
    }
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);      //value元素进队
    while(this.maxQueue.length && this.maxQueue[this.maxQueue.length - 1] < value){    
        this.maxQueue.pop();              //一旦有新的最大值进入，把maxQueue队列清空
    }
    this.maxQueue.push(value);  
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length){
        let res = this.queue.shift();       
        if(res === this.maxQueue[0]){   //如果出队的是最大值元素，则maxQueue也要更新
            this.maxQueue.shift();
        }
        return res;
    }else{
        return -1;
    }
};


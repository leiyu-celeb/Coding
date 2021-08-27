/* 232. 用栈实现队列
请你仅使用 两个栈 实现 先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
 

说明：
你只能使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 

进阶：
你能否实现每个操作均摊时间复杂度为 O(1) 的队列？
换句话说，执行 n 个操作的总时间复杂度为 O(n) ，即使其中一个操作可能花费较长时间。 
*/

/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);             //入队，进入stack1
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stack2.length){
        return this.stack2.pop();
    }else{
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop());
        }
        if(!this.stack2.length){
            return -1;
        }else{
            return this.stack2.pop();
        }
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.stack2.length){         
        return this.stack2[this.stack2.length - 1];
    }else{
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2[this.stack2.length - 1];
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;           //当且仅当两个栈为空时，队列为空
};

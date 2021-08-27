/* 155. 最小栈
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

提示：
pop、top 和 getMin 操作总是在 非空栈 上调用。
*/

var MinStack = function() {
    this.stack = [];
    this.minstack = [Infinity];
}

MinStack.prototype.push = function(x){
    this.stack.push(x);
    this.minstack.push(Math.min(this.minstack[this.minstack.length - 1], x));
}

MinStack.prototype.pop = function() {
    this.minstack.pop();
    return this.stack.pop();
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}


MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1];
}

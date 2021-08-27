function filter(arr, filterCallback) {
    // 首先，检查传递的参数是否正确。
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') 
    {
      return [];
    } else {
      let result = [];
       // 每次调用此函数时，我们都会创建一个 result 数组
       // 因为我们不想改变原始数组。
      for (let i = 0, len = arr.length; i < len; i++) {
        // 检查 filterCallback 的返回值是否是真值
        if (filterCallback(arr[i], i, arr)) { 
        // 如果条件为真，则将数组元素 push 到 result 中
          result.push(arr[i]);
        }
      }
      return result; // return the result array
    }
  }
  
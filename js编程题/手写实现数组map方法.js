function map(arr, mapCallback) {
    // 首先，检查传递的参数是否正确。
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') { 
      return [];
    } else {
      let result = [];
      // 每次调用此函数时，我们都会创建一个 result 数组
      // 因为我们不想改变原始数组。
      for (let i = 0, len = arr.length; i < len; i++) {
        result.push(mapCallback(arr[i], i, arr)); 
        // 将 mapCallback 返回的结果 push 到 result 数组中
      }
      return result;
    }
}
  
/**
 * --- 题目描述 ---
 *
 * 实现一个方法，把 HTTP 文本形式(字符串)的 header 转换成 JS 对象。
 * 
 * --- 测试用例 ---
 * 
 * 输入：
 * `Accept-Ranges: bytes 
 * Cache-Control: max-age=6000, public
 * Connection: keep-alive
 * Content-Type: application/javascript`
 * 输出：
 * {
 *   "Accept-Ranges": "bytes",
 *   "Cache-Control": "max-age=6000, public",
 *   Connection: "keep-alive",
 *   "Content-Type": "application/javascript"
 * }
 *
 * --- 解题思路 ---
 *
 * 1. 首先将每行数据作为数组的一个元素
 * 2. 将每个元素使用冒号分割，前面为 `key`，后面为 `value`。
 */

const solution = (s) => {
    let res = {};
    let arr = s.split("\n");
    arr.forEach((e) => {
        let tmp = e.split(": ");
        res[tmp[0]] = tmp[1];
    })
    return res;
}

// {
//     'Accept-Ranges': 'bytes',
//     'Cache-Control': 'max-age=6000, public',
//      Connection: 'keep-alive',
//     'Content-Type': 'application/javascript'
// }
  

/* 剑指 Offer 20. 表示数值的字符串
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]
 

示例 1：

输入：s = "0"
输出：true
示例 2：

输入：s = "e"
输出：false
示例 3：

输入：s = "."
输出：false
示例 4：

输入：s = "    .1  "
输出：true
 

提示：

1 <= s.length <= 20
s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，空格 ' ' 或者点 '.' 。 */

/**
 * @param {string} s
 * @return {boolean}
 */
 const isNumber = (s) => {
    let cursor = 0; // 扫描字符的光标
    let isValid;    // 标识变量，当前扫描时是否有效
  
    const scanSignedInteger = (s) => { // 扫描有符号整数的字符
      if (s[cursor] === '+' || s[cursor] === '-') { // 遇到+-，指针后移
        cursor++;
      }
      return scanUnsignedInteger(s); // 考察无符号数字部分
    };
  
    const scanUnsignedInteger = (s) => { // 扫描无符号整数部分的字符
      const temp = cursor;  // 临时保存当前指针位置
      while (s[cursor] >= '0' && s[cursor] <= '9') { // 遇到0-9数字就指针后移
        cursor++;                                    // 函数结束时，指针已扫完连续数字部分
      }
      return s[temp] >= '0' && s[temp] <= '9'; // 判断当前指针是否指向数字0-9
    };
  
    while (s[cursor] === ' ') { // 跳过开头的空格字符
      cursor++;
    }
  
    isValid = scanSignedInteger(s); // 先扫描整数部分
  
    if (s[cursor] === '.') { // 此时扫完整数部分，看看有没有遇到小数点
      cursor++;                     // 指针跳过小数点
      if (scanUnsignedInteger(s)) { // 扫描小数部分的整数
        isValid = true;                // 如果返回true，说明暂时是有效的数字
      }
      // 如果返回false，还不能说明是错的，因为有 '3.' 这种case
    }
  
    if (s[cursor] === 'e' || s[cursor] === 'E') { // 看看有没有遇到e/E
      cursor++;                    // 指针跳过E/e
      if (isValid) {               // E/e前面一定要是有效整数
        isValid = scanSignedInteger(s);  // E/e后面可以是有符号整数 比如 1e-9
      }
    }
  
    while (s[cursor] === ' ') { // 跳过结尾的空格字符
      cursor++;
    }
  
    if (s[cursor] !== undefined) { // 此时指针该越界了，我们希望它是undefined
      return false;     // 如果不是，那就false 比如 '3..' '3 8'，一个是.一个是8
    }
    return isValid;
  };
  
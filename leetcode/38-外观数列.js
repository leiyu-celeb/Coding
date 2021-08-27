/* 38. 外观数列
给定一个正整数 n ，输出外观数列的第 n 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。 

提示：

1 <= n <= 30
*/
//方法一：正则表达式，外观数列第n项，其实就是对n-1项的描述 （数量词+名词）
var countAndSay = function(n) {
    let prev = '1';
    for(let i = 1; i < n; i++) {
        prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
        //正则表达式，匹配每一段，用“数量”+“本身”去描述
    }
    return prev;
}


//方法二：枚举法

//方法三：递归法
var countAndSay = function(n) {
    if(n === 1) return '1';
    const temp = countAndSay(n - 1).match(/(\d)\1*/g);
    let result = '';
    for(let i = 0; i < temp.length; i++) {
        result += (temp[i].length + '' + temp[i].substring(0, 1));
    }
    return result;
}


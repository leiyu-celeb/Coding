/* 860. 柠檬水找零
在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

示例 1：

输入：[5,5,5,10,20]
输出：true
解释：
前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
由于所有客户都得到了正确的找零，所以我们输出 true。 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0;            //记录5元钞票和10元钞票的数量
    for(const bill of bills){
        if(bill === 5){          //遇到5元钞票
            five++;
        }else if(bill === 10){          //遇到10元钞票
            if(five === 0){
                return false;
            }
            five--;
            ten++;
        }else if(bill === 20){
            if(five > 0 && ten > 0){      //遇到20元钞票，优先找零一张5元，一张10元
                five--;
                ten--;
            }else if(five >= 3){         //没有10元钞票，就找三张5元
                five = five - 3;
            }else{                    //都不符合，无法找零，返回false
                return false;
            }
        }
    }
    return true;
};
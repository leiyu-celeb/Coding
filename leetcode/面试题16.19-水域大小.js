/* 面试题 16.19. 水域大小
你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。

若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。

编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。

示例：

输入：
[
  [0,2,1,0],
  [0,1,0,1],
  [1,1,0,1],
  [0,1,0,1]
]
输出： [1,2,4]
提示：

0 < len(land) <= 1000
0 < len(land[i]) <= 1000 */


/**方法：DFS
 * @param {number[][]} land
 * @return {number[]}
 */
let area;        //全局变量area, 记录每个水域的面积
let res;         //全局变量res，最后返回的结果集

var pondSizes = function(land) {
    res = [];
    for(let i = 0; i < land.length; i++) {
        for(let j = 0; j < land[0].length; j++) {
            if(land[i][j] === 0) {  //遇到一块水域
                area = 0;            //面积初始化为0
                turn(land, i, j);       
                res.push(area);
            }
        }
    }
    return res.sort((a, b) => a - b);          //按水域大小升序排序
};


var turn = function(land, i, j) {
    if(i < 0 || i >= land.length || j < 0 || j >= land[0].length || land[i][j] !== 0) return ;             //递归出口
    land[i][j] = 1;
    area++;
    turn(land, i + 1, j);
    turn(land, i - 1, j);
    turn(land, i, j + 1);
    turn(land, i, j - 1);
    turn(land, i - 1, j - 1);
    turn(land, i + 1, j + 1);
    turn(land, i + 1, j - 1);
    turn(land, i - 1, j + 1);
}

 
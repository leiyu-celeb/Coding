/* 2021/1/17
1232. 缀点成线
在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，
其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。

请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。 */


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const deltaX = coordinates[0][0], deltaY = coordinates[0][1];
    const n = coordinates.length;
    for (let i = 0; i < n; i++) {
        coordinates[i][0] -= deltaX;
        coordinates[i][1] -= deltaY;
    }
    const A = coordinates[1][1], B = -coordinates[1][0];
    for (let i = 2; i < n; i++) {
        const [x, y] = [coordinates[i][0], coordinates[i][1]];
        if (A * x + B * y !== 0) {
            return false;
        }
    }
    return true;
};

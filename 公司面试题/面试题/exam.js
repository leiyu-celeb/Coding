//代码题
// var name = '58同城';
// var obj = {
//     name: '安居客',
//     fn: () => {
//         var name = '赶集网';
//         return () => { return this.name; }
//     }
// }
// console.log(obj.fn()());
// var fo = obj.fn();
// console.log(fo());

//
var array = [-1, 1, 3, 4, 6, 10];
array.sort((a, b) => Math.abs(a - 3) - Math.abs(b - 3));

console.log(array);


/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function(packages, boxes) {
	packages = packages.sort((a,b) => a - b);
	boxes = boxes.map(item => item.sort((a,b) => a - b));
	let map = {};
	// map[0] = {val: 10, count: 2};
	let prefix = [];
	prefix[-1] = 0;
	for (let i = 0; i < packages.length; i++) {
		prefix[i] = prefix[i - 1] + packages[i];
	}

	// return prefix;
	let ret = Infinity;
	for (let i = 0; i < boxes.length; i++) {
		let tmpValue = 0;
		let count = 0;
		for (let j = 0; j < boxes[i].length; j++) {
			if (map[boxes[i][j]] == undefined) {
				if (boxes[i][j] < packages[0]) {
					map[boxes[i][j]] = 0
				} else if (boxes[i][j] >= packages[packages.length - 1]) {
					map[boxes[i][j]] = packages.length
				} else {
					let l = 0;
					let r = packages.length - 1;
					while (l < r) {
						let mid = (l + r) >> 1;
						if (packages[mid] == boxes[i][j]) {
							while (packages[mid] == packages[mid + 1]) {
								mid++;
							}
							map[packages[mid]] = mid + 1
							break;
						} else if (packages[mid] > boxes[i][j]) {
							r = mid;
						} else {
							l = mid + 1;
						}
					}
					if (map[boxes[i][j]] == undefined) {
						map[boxes[i][j]] = l
					}
				}
			}
			tmpValue += (map[boxes[i][j]] - count) * boxes[i][j] - (prefix[map[boxes[i][j]] - 1] - prefix[count - 1]);
			count = map[boxes[i][j]];
		}
		if (count == packages.length) {
			ret = Math.min(ret, tmpValue);
		}
	}
	return ret == Infinity ? -1 : (ret % 1000000007);
};

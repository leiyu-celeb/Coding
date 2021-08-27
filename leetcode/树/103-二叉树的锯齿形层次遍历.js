/* 103. 二叉树的锯齿形层序遍历
给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层序遍历如下：

[
  [3],
  [20,9],
  [15,7]
] 

*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = [];
    if(!root) return result;
    let queue = [];
    queue.push(root);
    let isOrderLeft = true;                  //初始化isOrderLeft为true
    while(queue.length){
        let currentLayerSize = queue.length;
        result.push([]);
        for(let i = 0; i < currentLayerSize; i++){
            let node = queue.shift();
            if(isOrderLeft){            //isOrderLeft为真，等价于正常的层次遍历，尾部进队
                result[result.length - 1].push(node.val)
            }else{                          //isOrderLeft为假，头部进队
                result[result.length - 1].unshift(node.val);
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        isOrderLeft = !isOrderLeft;          //遍历完一层，就取反，这样就可以做到锯齿形层次遍历
    }
    return result;
};










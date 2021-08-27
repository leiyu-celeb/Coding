/* 111. 二叉树的最小深度
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;         //树空为0
    let queue = [];          //定义一个队列queue
    let depth = 1;           //初始化最小深度为1
    queue.push(root);             //根节点进队
    while(queue.length){         //队不空
        let size = queue.length;        //获得当前层的节点数
        for(let i = 0; i < size; i++){         //遍历当前层节点
            let node = queue.shift();          //队首节点出队
            if(node.left === null && node.right === null){  //如果当前节点没有左右子树，循环结束，返回当前的depth
                return depth;
            }
            if(node.left) queue.push(node.left);         //左孩子不空，进队
            if(node.right) queue.push(node.right)       //右孩子不空，进队
         }
         depth++;    //遍历完一层，depth++
    }
    return depth;
};

/* 404. 左叶子之和
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24 */

/**方法一：DFS，利用一个布尔变量isLeft表示该节点是否是左孩子节点
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    
    const dfs = function(root, isLeft) {
        if(!root) return 0;         //空节点，返回0
        if(!root.left && !root.right) {   //叶子结点
            if(isLeft) {     //左叶子节点
                return root.val;      //返回节点值
            }
            return 0;      
        }
        return dfs(root.left, true) + dfs(root.right, false);
    }
    
    return dfs(root, false);
};




//方法二：BFS
const sumOfLeftLeaves = (root) => {
    if (!root) return 0;
    let sum = 0;
    const queue = [];
    queue.push(root);

    while (queue.length) {
        const cur = queue.shift();
        if (cur.left) {
            if (cur.left.left == null && cur.left.right == null) {
                sum += cur.left.val;
            } else {
                queue.push(cur.left);
            }
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }
    return sum;
};



/* 993. 二叉树的堂兄弟节点

在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

提示：

二叉树的节点数介于 2 到 100 之间。
每个节点的值都是唯一的、范围为 1 到 100 的整数。 */


/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
//方法一：DFS  我们只需要在深度优先搜索的递归函数中增加表示「深度」以及「父节点」的两个参数即可。
var isCousins = function(root, x, y) {
    let x_parent = null, x_depth = 0, x_found = false;         //记录x节点信息
    let y_parent = null, y_depth = 0, y_found = false;         //记录y节点信息

    function dfs(node, depth, parent) {
        if(!node) {
            return ;
        }
        if(node.val === x) {
            [x_parent, x_depth, x_found] = [parent, depth, true];
        }else if(node.val === y) {
            [y_parent, y_depth, y_found] = [parent, depth, true];
        }
        if(x_found && y_found) {
            return ;
        }
        dfs(node.left, depth + 1, node);
        if(x_found && y_found) {
            return ;
        }
        dfs(node.right, depth + 1, node);
    }

    dfs(root, 0, null);     //递归入口
    return x_depth === y_depth && x_parent !== y_parent;        //深度相等但父节点不同即为堂兄弟节点
}



//方法二: BFS
var isCousins = function(root, x, y) {
    // x 的信息
    let x_parent = null, x_depth = null, x_found = false;
    // y 的信息
    let y_parent = null, y_depth = null, y_found = false;
    
    // 用来判断是否遍历到 x 或 y 的辅助函数
    const update = (node, parent, depth) => {
        if (node.val === x) {
            [x_parent, x_depth, x_found] = [parent, depth, true];
        } else if (node.val === y) {
            [y_parent, y_depth, y_found] = [parent, depth, true];
        }
    }

    q = [[root, 0]];         //队列
    update(root, null, 0);   

    while (q.length) {       //队不空
        const [node, depth] = q.shift()          //出队
        if (node.left){
            q.push([node.left, depth + 1]);
            update(node.left, node, depth + 1);
        }
        if (node.right) {
            q.push([node.right, depth + 1]);
            update(node.right, node, depth + 1);
        }
        
        if (x_found && y_found) {         
            break;
        }
    }

    return x_depth === y_depth && x_parent !== y_parent;
};
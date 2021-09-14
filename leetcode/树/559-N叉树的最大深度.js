/* 559. N 叉树的最大深度
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

提示：

树的深度不会超过 1000 。
树的节点数目位于 [0, 10^4] 之间。 */


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        let depth = 1;      //记录最大深度
        function traverse(root, currentDepth) {
            if(root) {
                if(currentDepth > depth) {
                    depth = currentDepth;        //更新最大深度
                }
                root.children.forEach(child => traverse(child, currentDepth + 1));   //遍历每个孩子节点
            }
        }
        traverse(root, 1);      //递归入口
        return depth;
    }
};


var maxDepth = function(root) {
    if(!root) {
        return 0;
    }else{
        let depth = 1;
        function dfs(root, currentDepth) {
            if(root) {
                if(currentDepth > depth) {
                    depth = currentDepth;
                }
                root.children.forEach(child => dfs(child, currentDepth + 1));
            }
        }
        dfs(root, 1);
        return depth;
    }
}

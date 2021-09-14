/* 113. 路径总和 II

给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]

*/

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
//方法：DFS，回溯算法
var pathSum = function(root, targetSum) {
    let result = [];            //结果集

    function dfs(root, path, treeSum) {
        if(!root) {   //递归终止条件
            return ;
        }
        path.push(root.val);         //路径添加一个元素
        treeSum += root.val;         //就算当前路径和
        
        if(!root.left && !root.right) {             //叶子结点
            if(treeSum === targetSum) {
                result.push(path.slice());           //加入满足添加的路径
            }
        }else{                       //进一步递归左子树和右子树
            dfs(root.left, path, treeSum);
            dfs(root.right, path, treeSum);
        }
        path.pop();        //回溯
    }
    
    dfs(root, [], 0);      //递归入口
    return result;
};


var pathSum = function(root, targetSum) {
    const result = [];

    const dfs = function(root, path, treeSum) {
        if(!root) return ;
        path.push(root.val);
        treeSum += root.val;
        if(!root.left && !root.right) {
            if(treeSum === targetSum) {
                result.push(path.slice());
            }
        }else{
            dfs(root.left, path, treeSum);
            dfs(root.right, path, treeSum);
        }
        path.pop();
    }

    dfs(root, [], 0);
    return result;
}

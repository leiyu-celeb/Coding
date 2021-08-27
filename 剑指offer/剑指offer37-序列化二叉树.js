/* 剑指 Offer 37. 序列化二叉树      困难
请实现两个函数，分别用来序列化和反序列化二叉树。

示例: 

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/ */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 const serialize = (root) => {
    if (root == null) {                  // 遍历到 null 节点,  base case
      return '#';
    }
    const left = serialize(root.left);   // 左子树的序列化结果
    const right = serialize(root.right); // 右子树的序列化结果
    return root.val + ',' + left + ','+ right; // 按  根,左,右  拼接字符串
  };
  
  
  /**
   * Decodes your encoded data to tree.
   *
   * @param {string} data
   * @return {TreeNode}
   */
  const deserialize = (data) => {
    const list = data.split(',');   // split成数组
  
    const buildTree = (list) => {   // 基于list构建当前子树
      const rootVal = list.shift(); // 弹出首项，获取它的“数据”
      if (rootVal == "#") {         // 是'#'，返回null节点
        return null;
      }
      const root = new TreeNode(rootVal); // 不是'#'，则创建节点
      root.left = buildTree(list);        // 递归构建左子树
      root.right = buildTree(list);       // 递归构建右子树
      return root;                        // 返回当前构建好的root
    };
  
    return buildTree(list); // 构建的入口
  };
  
  /**
   * Your functions will be called as such:
   * deserialize(serialize(root));
   */
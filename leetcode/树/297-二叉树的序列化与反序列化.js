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
//将一棵树序列化为字符串，空节点用'#'表示
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

//将字符串反序列化为树
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




// const serialize = function (root) {
//     if(root == null) {
//         return '#';
//     }
//     let left = serialize(root.left);
//     let right = serialize(root.right);
//     return root.val + ',' + left + ',' + right;
// }


// const deserialize = function(data) {
//     const list = data.split(',');
//     const buildTree = function(list){
//         let first = list.shift();
//         if(first == '#'){
//             return null;
//         }
//         let root = new TreeNode(first);
//         root.left = buildTree(list);
//         root.right = buildTree(list);
//         return root;
//     }
//     return buildTree(list);
// }

  
  
  
  
  
  
  
  
  
  
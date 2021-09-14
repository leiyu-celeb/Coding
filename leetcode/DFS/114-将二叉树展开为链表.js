/* 114. 二叉树展开为链表

给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。 

*/


/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root == null)  return null; //空树，返回null
    //后序遍历递归模板
    flatten(root.left);
    flatten(root.right);

    let left = root.left;   //记录根节点左孩子
    let right = root.right; //记录根节点右孩子
    root.left = null;       //根节点左指针置为null
    root.right = left;      //根节点右指针指向左子树
    let p = root;            //定义p指针用来找到左子树的最后一个节点
    while(p.right != null){
        p = p.right;
    }
    p.right = right;       //左子树最右的节点连接到右子树
};


var flatten = function(root) {
    if(!root) return null;

    flatten(root.left);
    flatten(root.right);
    
    let left = root.left;
    let right = root.right;
    root.left = null;
    root.right = left;
    let p = root;
    while(p.right != null) {
        p = p.right;
    }
    p.right = right;
}


var flatten = function(root) {
    if(!root) return null;

    flatten(root.left);
    flatten(root.right);

    let left = root.left;
    let right = root.right;
    root.left = null;
    root.right = left;
    let p = root;
    while(p.right) {
        p = p.right;
    }
    p.right = right;
}



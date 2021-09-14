/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root == null) return null;     //空树，返回null
    if(root.val == key){     //删除的节点为root节点
        if(root.left == null) return root.right;
        if(root.right == null) return root.left;
        //root存在左右子树，则可以用 左子树最大值（即前驱） 或者 右子树最小值（即后继）来代替 root.val, 同时删除那个节点
        let minNode = getMinNode(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val); //更新右子树
    }else if(root.val > key){
        root.left = deleteNode(root.left, key);
    }else if(root.val < key){
        root.right = deleteNode(root.right, key);
    }
    return root;
};

//找出节点值最小的节点，根据BST的特性，右子树最小值为最左边的节点
const getMinNode = function(node) {
    while(node.left != null) {
        node = node.left;
    }
    return node;
}



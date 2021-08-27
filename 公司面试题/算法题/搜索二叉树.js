
var convertBST = function(root) {
    let sum = 0;
    const inorderTraverse = (node) => {
        if(node === null) return null;
        inorderTraverse(node.right);
        sum += node.val;
        inorderTraverse(node.left);
    }
    inorderTraverse(root);
    return root;
}
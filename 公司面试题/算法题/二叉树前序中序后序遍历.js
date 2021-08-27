// 前序遍历递归
function preorderTraversal(root) {
    const res = [];
    
    const preorder = function(node) {
        if(!node) return ;
        res.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);
    return res;
}

//前序遍历非递归，用栈的思想

function preorderTraversal2(root) {
    if(!root) return [];      
    const stack = [];
    const res = [];
    stack.push(root);     //根节点进栈
    while(stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return res;
}


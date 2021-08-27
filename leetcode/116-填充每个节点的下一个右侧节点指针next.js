
/**
 * @param {Node} root
 * @return {Node}
 */
//前序遍历递归思想
var connectTwoNode = function(node1, node2){
    if(node1 == null || node2 == null){ //其实只有可能左右子树同时为空，因为题目说了是 完美二叉树 
        return null;
    }
    node1.next = node2;      //左节点的next指针指向右节点
    
    //连接同一个父节点的两个子节点
    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);

    //连接跨越父节点的两个子节点
    connectTwoNode(node1.right, node2.left);
}

//主函数
var connect = function(root) {
    if(root == null) return null;     //空树，返回null
    connectTwoNode(root.left, root.right);   //不空，则传左右子树调用函数connnectTwoNode()
    return root;
};


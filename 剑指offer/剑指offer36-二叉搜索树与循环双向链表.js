/* 剑指 Offer 36. 二叉搜索树与双向链表

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。

还需要返回链表中的第一个节点的指针。 
*/

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    if(!root) return null;

    const nodeSet = [];      //存储各节点的数组

    const inorder = function(root) {          //中序遍历
        if(!root) return ;
        inorder(root.left);
        let p = root;
        nodeSet.push(p);                  //把节点的引用加入到数组nodeSet
        inorder(root.right);
    }
    inorder(root);

    if(nodeSet.length === 1) {                 //只有一个节点
        nodeSet[0].left = nodeSet[0];
        nodeSet[0].right = nodeSet[0];
    }else{
        for(let i = 1; i < nodeSet.length - 1; i++) {          //第一个节点和最后一个节点不在循环内处理，单独处理
            nodeSet[i].left = nodeSet[i - 1];
            nodeSet[i].right = nodeSet[i + 1];
        }
        nodeSet[0].left = nodeSet[nodeSet.length - 1];
        nodeSet[0].right = nodeSet[1];
        nodeSet[nodeSet.length - 1].left = nodeSet[nodeSet.length - 2];
        nodeSet[nodeSet.length - 1].right = nodeSet[0];
    }

    return nodeSet[0];            //nodeSet[0]为循环双向链表的头节点
};

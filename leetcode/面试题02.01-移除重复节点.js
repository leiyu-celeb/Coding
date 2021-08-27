/* 面试题 02.01. 移除重复节点

编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

示例1:

输入：[1, 2, 3, 3, 2, 1]
输出：[1, 2, 3]

示例2:

输入：[1, 1, 1, 1, 2]
输出：[1, 2]

提示：

链表长度在[0, 20000]范围内。
链表元素在[0, 20000]范围内。

进阶：

如果不得使用临时缓冲区，该怎么解决？ */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//方法一：哈希法，哈希表存储出现过的节点值，如果当前节点出现过，就删掉。   时间复杂度：O(n)
var removeDuplicateNodes = function(head) {
    if(!head) {
        return head;
    }
    const set = new Set();
    set.add(head.val);   //先添加头节点的值
    let prev = head;
    let cur = head.next;
    while(cur) {
        if(set.has(cur.val)) {       //遇到重复值
            prev.next = cur.next;
            cur = cur.next;
        }else{
            set.add(cur.val);    //不重复，就加入到set中
            prev = prev.next;
            cur = cur.next;
        }
    }
    return head;
};


//方法二：双指针，固定p指针，右侧q指针扫描，然后移动p，指针q再次扫描。   时间复杂度 O(n^2)，不太理想。
const removeDuplicateNodes = (head) => {
    let p = head;
    while (p) {
    let q = p;
        while (q.next) {
            if (q.next.val == p.val) {
                q.next = q.next.next;
            } else {
                q = q.next;
            }
        }
        p = p.next;
    }
    return head;
};
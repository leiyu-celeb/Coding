/* 23. 合并K个升序链表
给你一个链表数组，每个链表都已经按升序排列。
请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6

示例 2：
输入：lists = []
输出：[]

示例 3：
输入：lists = [[]]
输出：[] 
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//方法一：双指针法 + 两两合并  时间复杂度O(k*n),  空间复杂度O(1)    > 200ms
//遍历数组，合并两个成新的一个链表再继续合并下一个链表
var mergeKLists = function(lists) {
    
    let mergeTwoLists = function(l1, l2) {         //合并两个有序链表
        let dummyHead = new ListNode(0);
        let tail = dummyHead;
        while(l1 && l2) {
            if(l1.val <= l2.val){
                tail.next = l1;
                l1 = l1.next;
                tail = tail.next;
            }else{
                tail.next = l2;
                l2 = l2.next;
                tail = tail.next;
            }
        }
        if(l1) tail.next = l1;
        if(l2) tail.next = l2;
        return dummyHead.next;
    }

    let n = lists.length;
    if(n === 0) return null;
    let res = lists[0];
    for(let i = 1; i < n; i++) {    //遍历链表数组，从数组开头，开始两两合并，并更新在res中
        if(lists[i]) {
            res = mergeTwoLists(res, lists[i]);
        }
    }
    return res;
};


//方法二：递归 + 分治， 时间复杂度O(nlogK)，空间复杂度O(n)       < 100ms
var mergeKLists = function(lists) {
    let n = lists.length;
    if(n === 0) return null;
    let mergeTwoLists = function(l1, l2) {     //递归实现合并两个有序链表
        if(l1 === null){
            return l2
        }else if(l2 === null){
            return l1;
        }else if(l1.val <= l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        }else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
    let merge = function(left, right) {
        if(left === right) return lists[left];
        let mid = Math.floor((right + left) / 2);
        let l1 = merge(left, mid);
        let l2 = merge(mid + 1, right);
        return mergeTwoLists(l1, l2);
    }
    return merge(0, n - 1);
}


//方法三：数组    < 100ms
//遍历链表数组，把所有链表节点的值都加入数组中排序，再遍历数组构造链表
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    const arr = [];
    let dummyHead = new ListNode(0);
    lists.forEach(list => {
        let cur = list;
        while(cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
    });
    arr.sort((a, b) => a - b);
    let tail = dummyHead;
    arr.forEach(val => {
        let node = new ListNode(val);
        tail.next = node;
        tail = tail.next;
    });
    return dummyHead.next;
}

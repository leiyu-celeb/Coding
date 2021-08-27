//反转链表：
function reverseList(head){
    let pre = null, cur = head, nxt = head;
    while(cur) {
        nxt = cur.next;
        cur.next = pre;
        pre= cur;
        cur = nxt;
    }
    return pre;
}


//先反转链表，然后链表相加，最后再反转链表
function addInList( head1 ,  head2 ) {
    // write code here
    let l1 = reverseList(head1);
    let l2 = reverseList(head2);
    let carry = 0;
    let sum = 0;
    let head = null , tail = null;
    while(l1 || l2){
        const m = l1 ? l1.val : 0;
        const n = l2 ? l2.val : 0;
        sum = m + n + carry;
        if(!head){
            head = tail = new ListNode(sum % 10);
        }else{
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    if(carry){
        tail.next = new ListNode(carry);
    }
    return reverseList(head);
}
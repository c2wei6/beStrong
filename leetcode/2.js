function ListNode(val) {
    this.val = val;
    this.next = null;
}

// var l1 = new ListNode(5);
// var l2 = new ListNode(5);

var l1 = new ListNode(1);
l1.next = new ListNode(8);
var l2 = new ListNode(0);

// var l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);
// var l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    var temp = l3;
    var status = 0;

    while (l1 != null || l2 != null || status > 0) {
        if (l1 != null) {
            status += l1.val;
            l1 = l1.next;
        }

        if (l2 != null) {
            status += l2.val;
            l2 = l2.next;
        }

        temp.next = new ListNode(status);

        if (temp.next.val > 9) {
            temp.next.val %= 10;
            status = 1;
        } else {
            status = 0;
        }

        temp = temp.next;
    }

    return l3.next;
}

console.log(addTwoNumbers(l1, l2));

/*
    这道本来要昨天做的 但是不懂链表 今天看了下数据结构最前面的部分 从线性表开始 栈 队列 和 链表
    这道题虽然写的不优雅 但是我理解了js的链表是怎样的概念
*/
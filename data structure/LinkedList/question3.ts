//反转链表(递归方式)
//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  //递归的结束条件
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head?.next ?? null);

  head.next.next = head;
  head.next = null;

  return newHead;
}

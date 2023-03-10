//反转链表
//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  //判断节点为null 或只有一个节点
  if (head === null || head.next === null) return head;

  //反转链表结构
  let newHead: ListNode | null = null;
  while (head) {
    const current: ListNode | null = head.next;
    head.next = newHead;
    newHead = head;
    head = current;
  }

  return newHead;
}

export {};

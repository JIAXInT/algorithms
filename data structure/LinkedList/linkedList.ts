//创建node节点类
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

//创建linkdeList类s
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }

  //封装私有方法
  //根据position获取到当前的节点
  private getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current;
  }

  //追加节点
  append(value: T) {
    //根据value创建一个新节点
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  //遍历链表方法
  traverse() {
    const values: T[] = [];

    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" -> "));
  }

  //插入方法
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false;

    //根据value创建新节点
    const newNode = new Node(value);

    //判断是否需要插入到头部
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const previous = this.getNode(position - 1);

      newNode.next = previous!.next;
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }

  //删除方法
  removeAt(position: number): T | null {
    //越界的判断
    if (position < 0 || position >= this.size) return null;

    //判断删除的是否是第一个节点
    let current = this.head;
    if (position === 0) {
      this.head = current!.next;
    } else {
      const previous = this.getNode(position - 1);

      //找到需要的节点
      previous!.next = previous?.next?.next ?? null;
    }

    return current?.value ?? null;
  }

  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  //获取方法
  get(position: number): T | null {
    //越界问题
    if (position < 0 || position >= this.size) return null;

    //查找元素，并且范围元素
    return this.getNode(position)?.value ?? null;
  }

  //更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;
    //获取对应节点 直接更新即可
    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
  }

  //根据值，获取对应位置的索引
  indexOf(value: T) {
    //从第一个节点开始 向后遍历
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  //判断链表是否为空
  isEmpty() {
    return this.size === 0;
  }
}

const linkedList = new LinkedList();

linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");

linkedList.insert("abc", 0);
linkedList.insert("cba", 2);

linkedList.removeAt(0);
linkedList.removeAt(2);

console.log(linkedList.get(0));

linkedList.traverse();

linkedList.update("ppp", 0);
console.log(linkedList.indexOf("cba"));

linkedList.traverse();

export {};

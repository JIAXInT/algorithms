//创建node节点类
class Node<T>{
    value: T
    next:Node<T> | null = null
    constructor(value: T) {
        this.value = value
    }
}

//创建linkdeList类
class LinkedList<T>{
    private head: Node<T> | null = null
    private size: number = 0

    get length() {
        return this.size
    }

    //追加节点
    append(value:T) {
        //根据value创建一个新节点
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }

        this.size++
    }

    //遍历链表方法
    traverse() {
        const values:T[] = []

        let current = this.head
        while (current) {
            values.push(current.value)
            current = current.next
        }

        console.log(values.join(' -> '));
    }

    //插入方法
    insert(value: T, position: number):boolean {
        if (position < 0 || position > this.size) return false
        
        //根据value创建新节点
        const newNode = new Node(value)
        
        //判断是否需要插入到头部
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let current = this.head
            let previous: Node<T> | null = null
            let index = 0
            while (index++ < position && current) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous!.next  = newNode
        }
        this.size++

        return true
    }

    //删除方法
    removeAt(position: number): T | null{
        //越界的判断
        if (position < 0 || position >= this.size) return null
        
        return null
    }
}

const linkedList = new LinkedList()

linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')

linkedList.insert('abc', 0)
linkedList.insert('cba', 2)

linkedList.traverse()

export {}
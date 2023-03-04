//封装一个栈
class Stack<T = any>{
    //定义一个数组，用于储存元素
    private data: T[] = []

    //push方法:将一个元素压入栈中
    push(element: T): void {
        this.data.push(element)
    }

    //pop方法：将栈顶的元素弹出
    pop(): T | undefined {
        return this.data.pop()
    }

    //peek方法：查看栈顶元素，不进行任何操作
    peek(): T | undefined {
        return this.data[this.data.length - 1]
    }

    //isEmpty方法：判断栈是否为空 
    isEmpty(): boolean {
        return this.data.length === 0
    }

    //size方法：返回栈的数据个数
    size(): any {
        return this.data.length
    }
}



//创建stack实例
const stack = new Stack<string>()




export default Stack



import IQueue from "./IQueue";


class Queue<T> implements IQueue<T>{
    enqueue(element: T): void {
        this.data.push(element)
    }

    dequeue(): T | undefined {
        return this.data.shift()
    }

    peek(): T | undefined {
        return this.data[0]
    }

    isEmpty(): boolean {
        return this.data.length === 0
    }

    size(): number {
        throw this.data.length
    }
    //通过数组实现队列
    private data:T[] = []
}

export default Queue
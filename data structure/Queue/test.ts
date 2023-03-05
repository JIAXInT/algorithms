import Queue from "./queue";

const queue = new Queue<string>()

queue.enqueue('aaa')
queue.enqueue('bbb')
queue.enqueue('ccc')

console.log(queue.dequeue()); // aaa
console.log(queue.dequeue()); // bbb

console.log(queue.peek()); // ccc
console.log(queue.isEmpty()); // false
console.log(queue.size()); // 1




//约瑟夫环
// 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。

// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

import Queue from './queue'

function lastRemaining(n: number, m: number): number {
    //1、创建队列
    const queue = new Queue<number>()

    //2、将所有的数字加入到队列中
    for (let i = 0; i < n; i++){
        queue.enqueue(i)
    }

    //3、判断队列中是否还有数字
    while (queue.size() > 1) {
        for (let i = 1; i < m; i++){
            queue.enqueue(queue.dequeue()!)
        }
        queue.dequeue()
    }

    return queue.dequeue()!
};

console.log(lastRemaining(5,3))

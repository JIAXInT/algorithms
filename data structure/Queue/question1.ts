import Queue from "./queue";

//击鼓传花
function hotPotato(names: string[], num: number) {
    //1、创建队列结构
    const queue = new Queue<string>()

    //2、将所有的name入队
    for (const name of names) {
        queue.enqueue(name)
    }

    //3、淘汰的规则
    while (queue.size() > 1) {

        for (let i = 1; i < num; i++){
            const name = queue.dequeue()
            if (name) queue.enqueue(name)
        }
    
        queue.dequeue()
    }


    const leftName = queue.dequeue()!
    const index = names.indexOf(leftName)

    return index
    
}

const leftName = hotPotato(['aaa','bbb','ccc','ddd'],3)
console.log(leftName);

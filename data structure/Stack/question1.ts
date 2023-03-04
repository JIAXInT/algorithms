//十进制转二进制
import Stack from "./stack"


function decimalToBinary(decimal: number): string {
    //1、定义一个栈，用于保存余数
    const stack = new Stack<number>()

    //2、循环将decimal的余数压入栈中
    while (decimal > 0) {
        const result = decimal % 2
        stack.push(result)
        decimal = Math.floor(decimal / 2)
    }

    //3、以此取出栈中的余数
    let binary = ""
    while (!stack.isEmpty()) {
        binary += stack.pop()
    }
    
    return binary
}

//测试代码
console.log(decimalToBinary(35));
console.log(decimalToBinary(100));




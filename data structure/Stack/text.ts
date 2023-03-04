import Stack from "./stack";
 
//测试代码
const stack = new Stack<string>()

stack.push("aaa")
stack.push("bbb")
stack.push("ccc")
console.log(stack);
stack.pop()
console.log(stack);

console.log(stack.peek());

console.log(stack.isEmpty());
console.log(stack.size());
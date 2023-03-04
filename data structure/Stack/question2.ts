//有效的括号：
//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。



// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。 

import Stack from "./stack";

function isValid(s: string): boolean {
    //1、创建栈结构
    const stack = new Stack()

    //2、遍历s中所有的括号
    for (let i = 0; i < s.length; i++){
        const c = s[i]
        switch (c) {
            case "(":
                stack.push(")")
                break
        
            case "[":
                stack.push("]")
                break
    
            case "{":
                stack.push("}")
                break
            
            default:
                if (c !== stack.pop()) return false
                break
        }
    }

    return stack.isEmpty()
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));

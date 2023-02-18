function bsearch(A, X) {
    let l = 0, //查询范围的左边界
        r = A.length - 1, //查询范围的右边界
        guess //猜测位置

    while (l <= r) {
        guess = Math.floor((l + r) / 2)
            //循环不变式
            //guess等于l，r中间的位置
            //l:查找范围左 r：查找范围右
        if (A[guess] === X) {
            return guess
        } else if (A[guess] > X) {
            r = guess - 1
        } else {
            l = guess + 1
        }
        //循环不变式
        //l：新查找范围左 r:新查找范围右
    }
    return -1
}

//测试
const A = [1, 2, 5, 9, 16, 18, 26, 27, 31, 35, 38, 59, 68, 75, 81, 99]
console.log(bsearch(A, 16));
console.log(bsearch(A, 55));
console.log(bsearch(A, 99));
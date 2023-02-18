//外层循环不变式
//第k次循环执行后，前k大的值顺序排列在位置i
//循环执行后。位置i以及它右边的值处于排序状态
//内层循环不变式
//每次循环结束时控制变量j指向0-j元素中最大的值

function swap(A, i, j) {
    const t = A[i]
    A[i] = A[j]
    A[j] = t
}

function bubble_sort(A) {
    for (let i = A.length - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            // A[j - 1] > A[j] && swap(A, j - 1, j)
            if (A[j - 1] > A[j]) {
                swap(A, j - 1, j)
            }
            //循环结束j指向A[0] - A[j]中的最大值
        }
        // 循环结束A[i] - A[n-1]已排序
    }
}

const A = [5, 9, 7, 6, 3, 1, 9]
bubble_sort(A)
console.log(A);
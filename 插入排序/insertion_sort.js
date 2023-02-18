function insert(A, i, x) {
    let p = i - 1
    while (A[p] > x) {
        A[p + 1] = A[p]
        p--
    }
    A[p + 1] = x
}

function insertion_sort(A) {
    // i指向下一个需要排序的元素
    for (let i = 1; i < A.length; i++) {
        insert(A, i, A[i])
    }
}
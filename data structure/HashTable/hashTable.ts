class HashTable<T = any> {
    //创建一个数组，用来存放链地址法的链（数组）
    private storage: [string, T][][] = []
    
    //定义数组的长度
    private length: number = 7
    //记录已经存放元素的个数
    private count: number = 0

    private hashFnc(key: string, max: number): number {
        let hasCode = 0
        const length = key.length
        for (let i = 0; i < length; i++){
            //霍普法则计算hashcode
            hasCode = 31 * hasCode + key.charCodeAt(i)
        }
    
        //  求出索引值
        const index = hasCode % max
        
        return index
    }
    
    //插入、修改
    put(key: string, value: T) {
        //根据key获取数组中对应的索引值
        const index = this.hashFnc(key, this.length)
        
        //取出索引值对应位置的数组
        let bucket = this.storage[index] 

        //判断bucket是否有值
        if (!bucket) {
            bucket = []
            this.storage[index] = bucket
        }

        //确定有一个数组 但数组中是否存在 key并不确定
        let isUpdate = false
        for (let i = 0; i < bucket.length; i++){
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            if (tupleKey === key) {
                //覆盖的操作
                tuple[1] = value
                isUpdate = true
            }
        }

        //如果上面代码m没有进行覆盖，那么在该位置进行添加
        if (!isUpdate) {
            bucket.push([key, value])
            this.count++
        }
    }

    //获取值
    get(key: string): T | undefined{
        //根据key获取索引值index
        const index = this.hashFnc(key,this.length)

        //获取bucket（桶）
        const bucket = this.storage[index]
        if (!bucket) return undefined
        
        //对bucke进行遍历
        for (let i = 0; i < bucket.length; i++){
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            const tupleValue = tuple[1]
            if (tupleKey === key) {
                return tupleValue
            }
        }

        return undefined
    }
    
}

const hashTable = new HashTable()
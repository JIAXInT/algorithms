/**
 * 哈希函数 将key映射为index
 * @param key 要转换的key
 * @param max 数组的长度(最大的数值)
 * @returns 索引值
 */

function hashFnc(key: string, max: number): number {
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
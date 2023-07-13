/**
 * @param {number} n
 * @return {boolean}
 * 「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/happy-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

由于sum可能会循环出现，因此可以根据sum是否出现过来判断是否为快乐数
 */
var isHappy = function(n) {
    const res = new Map()
    const getSum = (num)=>{
        let sum = 0;
        while(num){
            sum += (num % 10) ** 2
            num = Math.floor(num / 10)
        }
        return sum;
    }
    while(true){
        if(n === 1)return true;
        if(res.has(n))return false;
        res.set(n, 1)
        n = getSum(n)
    }
};
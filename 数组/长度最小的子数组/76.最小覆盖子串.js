// 思路：
// 用左右两个指针遍历s字符串，当滑动窗口中的字符不能覆盖t中的字符时，右指针右移，扩大窗口，
// 把右边的字符加入滑动窗口，当滑动窗口中的字符能覆盖t中的字符时，不断左移左指针，缩小窗口，
// 直到窗口中的字符刚好能覆盖t中的字符，这个时候在左移就不能覆盖t中的字符了，在指针移动的过程中，不断更新最小覆盖子串

var minWindow = function(s, t) {
    let need = {}
    let sum = {}
    for(let a of t){
        need[a] = (need[a] || 0) + 1
    }
    let left = 0, right = 0
    let valid = 0
    // 最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity
    while(right < s.length){
        let c = s[right]
        right++
        if(need[c]){
            // 当前字符在需要的字符中，则更新当前窗口统计
            sum[c] = (sum[c] || 0) + 1
            if(sum[c] === need[c]){
                // 当前窗口和需要的字符匹配时，验证数量增加1
                valid ++
            }
        }
        // Object.keys(need)获取对象的key数组
        // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
        while(valid === Object.keys(need).length){
            if(right - left < len){
                start = left
                len = right - left
            }
            let d = s[left]
            left ++
            if(need[d]){
                if(sum[d] === need[d]){
                    valid --
                }
                sum[d]--
            }
        }
    }
    return len === Infinity? '' : s.substr(start, len)
};
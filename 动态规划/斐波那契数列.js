let fib = function(num){
    let dp = new Array(3)
    dp[0] = 0
    dp[1] = 1
    if(num <= 1) return num;
    for(let i = 2; i <= num; i++){
        let sum = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = sum
    }
    return dp[1]
}
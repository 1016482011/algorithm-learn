function jumpFloor(number)
{
    // write code here
    function fibo (memo,n) {
        if (n === 1) return 1
        if (n === 2) return 2
        if (typeof memo[n] !== 'undefined') return memo[n]
        memo[n] = fibo(memo, n-1) + fibo(memo, n-2)
        return memo[n]
    }
    
    return fibo({}, number)
}
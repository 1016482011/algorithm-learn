function Fibonacci(n)
{
    function fibo (memo,n) {
        if (n === 0) return 0
        if (n === 1) return 1
        if (typeof memo[n] !== 'undefined') return memo[n]
        memo[n] = fibo(memo, n-1) + fibo(memo, n-2)
        return memo[n]
    }
    
    return fibo({}, n)
}
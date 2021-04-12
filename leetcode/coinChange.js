/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode-cn.com/problems/coin-change/
 */
var coinChange = function(coins, amount) {
  let cache = {}
 function fun (n) {
   if (n === 0) return 0
   if (n < 0) return -1
   if (cache[n] !== undefined) return cache[n]
   let res = Infinity
   for (let it of coins) {
     let sub = fun(n - it)
     if (sub === -1) {
       cache[n] = Infinity
       continue
     }
     res = Math.min(res, 1+sub)
   }
   cache[n] = res
   if (res === Infinity) return -1
   return res
 }
 return fun(amount)
};
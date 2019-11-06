/**
 * 问题：假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？
 * 终止条件 f(1) = 1;f(2) = 2;
 * 递推公式 f(n) = f(n-1)+f(n-2);
 */

// 递归解法
let cache = {}
function f(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  // 去除重复计算
  if (cache[n]) return cache[n]
  const ret = f(n - 1) + f(n - 2)
  cache[n] = ret
  return ret
}

console.log(f(7))

// 循环解法
function f2(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let ret = 0,
    pre = 2,
    prepre = 1
  for (i = 3; i <= n; i++) {
    // 当i为3,f(3)=f(2)+f(1)
    ret = pre + prepre
    prepre = pre
    pre = ret
  }
  return ret
}

console.log(f2(7))

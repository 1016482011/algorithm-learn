/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] !== undefined) {
      if (prices[i + 1] - prices[i] > 0) {
        sum += prices[i + 1] - prices[i];
      }
    }
  }
  return sum;
};

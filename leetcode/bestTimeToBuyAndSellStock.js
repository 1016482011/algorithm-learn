/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let min = 0,
    max = 0,
    num = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[min] > prices[i]) min = i;
    if (prices[max] < prices[i]) max = i;
    if (max < min) max = min;
    num = Math.max(num, prices[max] - prices[min]);
  }
  return num;
};

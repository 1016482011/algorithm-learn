/**
 * https://leetcode-cn.com/problems/min-stack/
 * initialize your data structure here.
 */
var MinStack = function() {
  this.state = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.state.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.state.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.state[this.state.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.state.length === 0) return;
  let min = this.state[0];
  for (let i = 1; i < this.state.length; i++) {
    if (min > this.state[i]) min = this.state[i];
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

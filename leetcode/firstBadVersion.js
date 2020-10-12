/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 * https://leetcode-cn.com/problems/first-bad-version/
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      function findErrorVersion(start, end) {
          if (start >= end) return start
          let half = Math.floor((start + end) / 2)
          if (isBadVersion(half)) {
              return findErrorVersion(start, half)
          } else {
              return findErrorVersion(half + 1, end)
          }
      }
      return findErrorVersion(1, n)
  };
};
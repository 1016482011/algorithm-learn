/**
 * 二分查找
 * @param {*} arr 目标数组
 * @param {*} value 要查找的数据
 */
function bsearch(arr, value) {
  const len = arr.length
  let low = 0,
    high = len - 1
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2)
    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

console.log(bsearch([1, 4, 6, 7, 8, 9, 12], 9))
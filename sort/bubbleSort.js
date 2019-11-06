// 冒泡排序
function bubbleSort(arr) {
  const len = arr.length
  if (len <= 1) return
  for (let i = 0; i < len; i++) {
    // 提前结束标识
    let flag = true
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = false
      }
    }
    if (flag) return arr
  }
  return arr
}

console.log(bubbleSort([2, 9, 3, 4, 8, 3]))

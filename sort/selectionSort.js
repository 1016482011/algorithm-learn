// 选择排序
function selectionSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  for (let i = 0; i < len - 1; i++) {
    let min = arr[i]
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }
    arr[minIndex] = arr[i]
    arr[i] = min
  }
  return arr
}

console.log(selectionSort([2, 9, 3, 4, 8, 3]))

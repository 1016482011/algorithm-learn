// 插入排序
function insertionSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  for (let i = 1; i < len; i++) {
    const value = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = value
  }

  return arr
}

console.log(insertionSort([2, 9, 3, 4, 8, 3]))

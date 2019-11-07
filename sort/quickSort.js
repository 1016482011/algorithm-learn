// 快速排序
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function partition(arr, pivot, left, right) {
  // 分区点数据
  const pivotVal = arr[pivot]
  let startIndex = left
  // 将分区内数据与分区点比较，如果小于分区点数据，则交换，并且startIndex加一
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, pivot)
  return startIndex
}

function quickSort(arr, left, right) {
  if (left >= right) return
  // 分区点
  const pivot = right
  const partitionIndex = partition(arr, pivot, left, right)
  quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
  quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
}

const testArr = []
let i = 0
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000))
  i++
}
console.log(testArr)
quickSort(testArr, 0, testArr.length - 1)
console.log(testArr)

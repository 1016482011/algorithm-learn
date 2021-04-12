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

const testArr = [1332802,1177178,1514891,871248,753214,123866,1615405,328656,1540395,968891,1884022,252932,1034406,1455178,821713,486232,860175,1896237,852300,566715,1285209,1845742,883142,259266,520911,1844960,218188,1528217,332380,261485,1111670,16920,1249664,1199799,1959818,1546744,1904944,51047,1176397,190970,48715,349690,673887,1648782,1010556,1165786,937247,986578,798663]
// let i = 0
// while (i < 10) {
//   testArr.push(Math.floor(Math.random() * 1000))
//   i++
// }
console.log(testArr)
quickSort(testArr, 0, testArr.length - 1)
console.log(testArr)

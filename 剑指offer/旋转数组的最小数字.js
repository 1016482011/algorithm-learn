function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length === 0) {
        return 0
    }
    let left = 0,right = rotateArray.length - 1
    if (rotateArray[left] <  rotateArray[right]) return rotateArray[left]
    while (left < right) {
        if(left + 1 === right) {
            return rotateArray[right]
        }
        let mid = (left + right) >> 1
        if (rotateArray[left] > rotateArray[mid]) {
            right = mid
        }
        if (rotateArray[right] < rotateArray[mid]) {
            left = mid
        }
        if (rotateArray[right] === rotateArray[left] && rotateArray[right] === rotateArray[mid]) {
            return Math.min(...rotateArray.slice(left, right+1))
        }
    }
}
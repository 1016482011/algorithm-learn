function FindGreatestSumOfSubArray(array)
{
    // write code here
    let max = array[0]
    let sum = 0
    for (let i = 0;i < array.length;i++) {
        sum = sum < 0 ? 0 : sum
        sum = sum + array[i]
        max = max < sum ? sum : max
    }
    return max
}
module.exports = {
    FindGreatestSumOfSubArray : FindGreatestSumOfSubArray
};
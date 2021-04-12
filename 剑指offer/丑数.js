function GetUglyNumber_Solution(index)
{
    if (index <= 0) return 0
    let numbers = [1]
    let nextIndex = 1
    let p2 = 0
    let p3 = 0
    let p5 = 0
    while (nextIndex < index) {
        let min = Math.min(numbers[p2] * 2,numbers[p3] * 3, numbers[p5] * 5)
        numbers[nextIndex] = min
        while (numbers[p2] * 2 <= min) {
            p2++
        }
        while (numbers[p3] * 3 <= min) {
            p3++
        }
        while (numbers[p5] * 5 <= min) {
            p5++
        }
        nextIndex++
    }
    let ugly = numbers[nextIndex - 1]
    numbers = null
    return ugly
}
module.exports = {
    GetUglyNumber_Solution : GetUglyNumber_Solution
};
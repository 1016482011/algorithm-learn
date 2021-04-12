function MoreThanHalfNum_Solution(numbers)
{
    if (!numbers) return 0
    let str = null, count = 0;
    for (let i=0;i<numbers.length;i++) {
        if(count === 0) {
            str = numbers[i]
            count = 1
        } else if (numbers[i] === str) {
            count++
        } else {
            count--
        }
    }
    let total = 0
    if (count === 0) return 0
    for (let j = 0;j<numbers.length;j++) {
        if (numbers[j] === str) total++
    }
    return total > numbers.length / 2 ? str : 0
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};
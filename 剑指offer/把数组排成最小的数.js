function PrintMinNumber(numbers)
{
    // write code here
    let j = 0
    while (j < numbers.length) {
        let a = numbers[j] + ''
        for (let i = j + 1;i < numbers.length; i++) {
            let b = numbers[i] + ''
            let ab = a + b
            let ba = b + a
            let abGreater = true
            for (let count = 0;count < ab.length; count++ ) {
                if (ab[count] < ba[count]) {
                    abGreater = false
                    break
                } else if (ab[count] > ba[count]) {
                    abGreater = true
                    break
                }
            }
            if (abGreater) {
                let temp = numbers[j]
                numbers[j] = numbers[i]
                numbers[i] = temp
                a = numbers[j] + ''
            }
        }
        j++
    }
    return numbers.join('')
}
module.exports = {
    PrintMinNumber : PrintMinNumber
};
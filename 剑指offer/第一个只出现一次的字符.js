function FirstNotRepeatingChar(str)
{
    // write code here
    let obj = {}
    for (let i = 0;i<str.length;i++) {
        if (typeof obj[str[i]] === 'undefined') {
            obj[str[i]] = i
        } else if (typeof obj[str[i]] === 'number') {
            obj[str[i]] = false
        }
    }
    let min = -1
    for (let o of Object.keys(obj)) {
        if (typeof obj[o] === 'number') {
            if (min === -1 || min > obj[o]) {
                min = obj[o]
            }
        }
    }
    return min
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};
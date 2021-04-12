function NumberOf1(n)
{
    // write code here
    let count = 0, flag = 1
    while (flag) {
        if (n & flag) {
            count ++
        }
        flag = flag << 1
    }
    return count
}
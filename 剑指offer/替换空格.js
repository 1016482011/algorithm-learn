function replaceSpace(str)
{
    if (!str) return str
    let tmp = ''
    for (let i = 0;i<str.length;i++) {
        if (str[i] === ' ') {
            tmp += '%20'
            continue
        }
        tmp += str[i]
    }
    return tmp
}
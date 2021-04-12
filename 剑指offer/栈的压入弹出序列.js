function IsPopOrder(pushV, popV)
{
    if (pushV.length === 0) return true
    let stack = []
    while (pushV.length > 0) {
        const pre = pushV.shift()
        if (pre === popV[0]){
            popV.shift()
            while(stack.length > 0 && stack[stack.length - 1] === popV[0]) {
                popV.shift()
                stack.pop()
            }
        } else {
            stack.push(pre)
        }
    }
    return stack.length === 0
}
module.exports = {
    IsPopOrder : IsPopOrder
};
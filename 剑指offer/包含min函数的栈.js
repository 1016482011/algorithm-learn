const stack = []
const minStack = []
function push(node)
{
    stack.push(node)
    if (minStack.length === 0) {
        minStack.push(node)
    }
    if (minStack[minStack.length - 1] > node) {
        minStack.push(node)
    } else {
        minStack.push(minStack[minStack.length - 1])
    }
}
function pop()
{
    minStack.pop()
    return stack.pop()
}
function top()
{
    return stack[stack[length - 1]]
}
function min()
{
    return minStack[minStack.length - 1]
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};
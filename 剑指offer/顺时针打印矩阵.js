function printMatrix(matrix)
{
        if (!matrix) return
    let arr = []
    function inner (numbers, row, col, start) {
        const endX = row - start - 1
        const endY = col -start -1
        for (let i = start;i <= endX;i++) {
            arr.push(numbers[start][i])
        }
        if (start < endY) {
            for (let i = start+1;i<=endY;i++) {
                arr.push(numbers[i][endX])
            }
        }
        if (start < endY && start < endX) {
            for (let i = endX-1;i>=start;i--) {
                arr.push(numbers[endY][i])
            }
        }
        if (start < endX && start < endY - 1){
            for (let i = endY - 1;i>start;i--) {
                arr.push(numbers[i][start])
            }
        }
    }
    function outer(numbers, col, row) {
        if (col <= 0 || row <=0) {
            return
        }
        let start = 0
        while(col > start * 2 && row > start * 2) {
            inner(numbers, col, row, start)
            start++
        }
    }
    outer(matrix,matrix[0].length,matrix.length)
    return arr
}
module.exports = {
    printMatrix : printMatrix
};
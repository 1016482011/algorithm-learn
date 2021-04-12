function VerifySquenceOfBST(sequence)
{
    // write code here
    if (!sequence || sequence.length === 0) {
        return false
    }
    function ver(arr) {
        let root = arr[arr.length - 1]
        let i = 0
        for (;i<arr.length - 1;i++) {
            if (arr[i] > root) {
                break
            }
        }
        let j = i
        for (;j<arr.length - 1;j++) {
            if (arr[j] < root) {
                return false
            }
        }
        let left = true

        if (i > 0) {
            left = ver(arr.slice(0,i))
        }

        let right = true

        if (j < arr.length - 1) {
            right = ver(arr.slice(i, arr.length - 1))
        }

        return left && right
    }
    return ver(sequence)

}
module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};
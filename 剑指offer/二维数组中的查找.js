function Find(target, array)
{
    for (let i = 0;i<array.length;i++) {
        for(let j = 0;j<array[i].length;j++) {
            if (array[i][j] === target) {
                return true
            }
            if (array[i][j] > target) break
        }
    }
    
    return false
}
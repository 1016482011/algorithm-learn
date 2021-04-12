function reOrderArray(array)
{
    let i = 0, j=0;
    for (;j<array.length;j++) {
        if (array[j] & 1) {
            let tmp = array[j]
            for (let k = j - 1;k>=i;k--) {
                array[k + 1] = array[k]
            }
            array[i++] = tmp
        }
    }
    return array
}
const arr = [1, 40, -5, 10, 0];

function sortArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let numderI = arr[i];
                let numberJ = arr[j];
                arr[i] = numberJ;
                arr[j] = numderI;
            }
        }
    }

    return arr
}

console.log(sortArray(arr));
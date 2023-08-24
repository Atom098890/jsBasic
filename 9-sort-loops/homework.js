const arr = [1, 40, -5, 10, 0, 6];

function sortArray(arr) {
    let result = [...arr];

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                let numderI = result[i];
                let numberJ = result[j];
                [result[i], result[j]] = [numberJ, numderI];
            }
        }
    }

    return result;
}

console.log(sortArray(arr));
const arr = [1, 40, -5, 10, 0, 6];

function sortArray(arr) {
    let result = [...arr];

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }

    return result;
}

console.log(sortArray(arr));
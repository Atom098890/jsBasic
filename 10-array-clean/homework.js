const isGreaterThanFive = (num) => num > 5;
const isEqualZero = (num) => num === 0;


function filterArray(arr, fn) {
    const result = [];

    for (const el of arr) {
        if (!fn(el)) {
            result.push(el);
        }
    }

    return result
}

console.log(filterArray([0, 1, 5, 6, 5, 7, 5], isGreaterThanFive));
console.log(filterArray([0, 1, 5, 6, 5, 7, 5], isEqualZero));
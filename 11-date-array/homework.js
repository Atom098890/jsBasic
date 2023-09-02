const array = ['10-02-2022', 'test', '11/12/2023', '01/00/2022', '32/12/2023'];

function isgValidDates(arr) {
    const result = arr
        .filter((item) => item.slice(0, 2) < 31 && (item.slice(3, 5) != 0 && item.slice(0, 2) != 0))
        .map((date) => {
            if(date.includes('/')) {
                let num = date.split('/');
                [num[0], num[1]] = [num[1], num[0]];
                return num.join('-')
            } else {
                return date;
            }
        });

    return result;
}

console.log(isgValidDates(array));
const array = ['30-06-2022', 'test', '11/31/2023', '01/00/2022', '32/12/2023'];

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
        })
        .filter((date) => !((date.slice(3, 5) == '04' || '06' || '09' || '11') && date.slice(0, 2) == 31));

    return result;
}

console.log(isgValidDates(array));
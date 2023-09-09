const array = ['DD-MM-YYYY','MM/DD/YYYY','31-07-2022','31/31/1990','10-02-2022', '29-02-2022', '30-02-2022', '31-02-2022', 'test', 5, '11/12/2023', '00/13/2022', '41/12/2023', '41/-12/2023', 'aaaa/bbbb/vvvv', '//', [], ''];

function transformDateToArray(date) {
    let [day, month, year] = date.split('-');

    if (date.includes('/')) {
        [month, day, year] = date.split('/');
    }

    if (!day || isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    return [day, month, year];
}

function checkCorrectDate (str) {
    const SHORT_MONTHS = ['04', '06', '09', '11'];

    if (typeof str !== 'string') {
        return false;
    }   

    const dateNumbersArray = transformDateToArray(str);

    if (!dateNumbersArray) {
        return false;
    }

    const [day, month] = dateNumbersArray;
    
    if ((Number(day) > 31 || Number(month) > 12) || (Number(day) === 0 || Number(month) === 0)) {
        return false;
    }

    if (SHORT_MONTHS.includes(month) && day >= 31) {
        return false;
    }

    return true;

}

function isValidDates(arr) {
    const result = [...arr];
        
    return result.filter(checkCorrectDate).map((date) => transformDateToArray(date).join('-'));
}
console.log(isValidDates(array));
const query = {
    search: 'Вася',
    take: 10,
    q: 'qwe'
};

function generateQueryPath(query) {
    let result = '';

    for (const key in query) {
        result += `${key}=${query[key]}&`
    }

    return result.slice(0, -1)
}
console.log(generateQueryPath(query));
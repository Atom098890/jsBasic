const query = {
    search: 'Вася',
    take: 10,
    q: 'qwe'
};

function generateQueryPath(query) {
    return Object.entries(query).map((q) => `${q[0]}=${q[1]}`).join('&');
}
console.log(generateQueryPath(query));
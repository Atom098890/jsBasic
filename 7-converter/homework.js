function exchangeMoney(sum, currencyFrom, currencyTo) {
    const USD = 94;
    const EUR = 100;

    if (currencyFrom === 'rub' && currencyTo === 'usd') {
        return sum / USD;
    } else if (currencyFrom === 'rub' && currencyTo === 'eur') {
        return sum / EUR
    }

    if (currencyFrom === 'usd' && currencyTo === 'rub') {
        return sum * USD; 
    } else if (currencyFrom === 'eur' && currencyTo === 'rub') {
        return sum * EUR;
    }

    return null;
}

console.log(exchangeMoney(235000, 'rub', 'usd'));
function exchangeMoney(sum, currencyFrom, currencyTo) {
    const USD = 94;
    const EUR = 100;

    switch (`${currencyFrom}-${currencyTo}`) {
        case 'rub-usd':
            return sum / USD;
        case 'rub-eur':
            return sum / EUR;
        case 'usd-rub':
            return sum * USD;
        case 'eur-rub':
            return sum * EUR;
        default:
            return null;
    }
}

console.log(exchangeMoney(235000, 'rub', 'usd'));
let cardNum = '4561-2612-1234-5467';


function isValidCard(card) {
    const onlyNum = card.replaceAll('-', '');
    let sum = 0;

    for (let i = 0; i < onlyNum.length; i++) {
        if ((onlyNum.length - 1 - i) % 2 == 1) {
            if (2 * onlyNum[i] > 9) {
                sum += (2 * onlyNum[i] - 9);
            } else {
                sum += 2 * onlyNum[i];
            }
        } else {
            sum += Number(onlyNum[i]);
        }
    }

    
    return sum % 10 === 0;
}

console.log(isValidCard(cardNum));
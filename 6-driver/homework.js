const hasLicence = true;
const age = 19;
const isDrink = false;

const isDriver = age > 18 && hasLicence && !isDrink;
isDriver ? console.log('Может') : console.log('Не может');

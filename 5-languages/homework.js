const languages = 'es';

switch (languages) {
    case 'ru':
        console.log('Привет!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    case 'es':
        console.log('Hola!');
        break;
    default:
        console.log("I don't know this languages!");
}


switch (true) {
    case languages === 'ru':
        console.log('Привет!');
        break;
    case languages === 'de':
        console.log('Gutten tag!');
        break;
    case languages === 'es':
        console.log('Hola!');
        break;
    default:
        console.log("I don't know this languages!");
}
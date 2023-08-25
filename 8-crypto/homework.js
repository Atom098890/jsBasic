function crypto(password) {
    if (password === '' || (typeof password === 'number')) {
        return null;
    }

    const result = password.split('').reverse();
    const cr = result.splice(0, 2)
    return result.concat(cr).join('');
}

function check(password, check = '') {
    const arr = password.split('').reverse()
    const cr = arr.splice(0, 2);
    const result = arr.concat(cr).join('');

    if (result === check) {
        return true
    }

    return false;
}

const pass = crypto('BlaBlaTouch');
console.log(pass);
console.log(check(pass, 'BlaBlaTouch'));

const pass2 = crypto('Django4545');
console.log(check(pass2, 'Django4545'));
function validateEmail() {
    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error')
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.trim() == '') {
        emailError.innerHTML = 'Email cannot be blank';
        return false;
    } else if (!email.value.match(regEx)) {
        emailError.innerHTML = 'Email not in global format';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}



function validatePassword() {
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')


    if (password.value.trim() == '') {
        passwordError.innerHTML = 'Password cannot be blank';
        return false;
    } else if (password.value.length < 6 || password.value.length > 20) {
        passwordError.innerHTML = 'Invalid Password';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}
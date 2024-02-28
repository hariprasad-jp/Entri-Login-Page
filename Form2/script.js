
let submitError = document.getElementById('submit-error')
let submitBtn = document.getElementById('submit')




submitBtn.addEventListener('focus', () => {


    if (!validateName() || !validateEmail() || !validatePassword() || !validateRepeat()) {
        submitError.innerHTML = 'Please resolve the errors';

    }
    else {

        submitBtn.removeAttribute("aria-disabled")
        submitBtn.innerHTML = "Submit"
        validateForm()
    }

})

function validateForm() {




    submitError.innerHTML = '';
    window.location.href = "success.html";

}


function validateName() {
    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')


    if (name.value.trim() == '') {
        nameError.innerHTML = 'username cannot be blank';

    } else if (name.value.length < 5) {
        nameError.innerHTML = 'username must not be less than 5 characters';

    }
    else {
        nameError.innerHTML = '';
        return true;
    }
}

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
        passwordError.innerHTML = 'Password length cannot be less than 6 characters or more than 20 characters';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}

function validateRepeat() {
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeat-error')

    if (password.value != repeatPassword.value) {
        repeatError.innerHTML = 'Password mismatch';
        return false;
    } else {
        repeatError.innerHTML = '';
        return true
    }
}

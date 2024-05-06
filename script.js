/*const form = document.querySelector('#form');
const username = document.querySelector('#Username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    
})

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === '') {
        setError(username, 'Username is requried')
    }
    else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is requried')
    }
    else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, 'Password is requried')
    }
    else if (passwordVal.length < 8) {
        setError(password, 'Password must be alteast 8 characters long');
    }
    else {
        setSuccess(password);
    }

    
}

function setError(element, message) {
    const input = element.parentElement;
    const errorElement = input.querySelector('.error')

    errorElement.innerText = message;
    input.classList.add('error')
    input.classList.remove('success')
}

function setSuccess(element) {
    const input = element.parentElement;
    const errorElement = input.querySelector('.error');

    errorElement.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
};

*/

const form = document.querySelector('#form');
const username = document.querySelector('#Username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    let allInputsValid = true;

    if (usernameVal === '') {
        setError(username, 'Username is required');
        allInputsValid = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        allInputsValid = false;
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
        allInputsValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
        allInputsValid = false;
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
        allInputsValid = false;
    } else {
        setSuccess(password);
    }

    if (allInputsValid) { 
        alert('Successfully registered!');
    }
}

function setError(element, message) {
    const input = element.parentElement;
    const errorElement = input.querySelector('.error');

    errorElement.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

function setSuccess(element) {
    const input = element.parentElement;
    const errorElement = input.querySelector('.error');

    errorElement.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
};
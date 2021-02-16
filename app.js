// Get Elements id in the form element
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// prevent default submit and submit event listener
form.addEventListener("submit", (e) => {
    // Validation for Username
    if (username.value == "" || username.value == "null") {
        let usernameMsg = document.getElementById('username-msg');
        usernameMsg.innerHTML = "Don't you have a username 🙄"
        e.preventDefault();
    }

    // Validation for Email
    if (email.value == "" || email.value == "null") {
        let emailMsg = document.getElementById('email-msg');
        emailMsg.innerHTML = "Dude you can't leave your email empty 🤦‍♂️"
        e.preventDefault();
    }

    // Validation for Phone number
    if (phone.value == "" || phone.value == "null") {
        let phoneMsg = document.getElementById('phone-msg');
        phoneMsg.innerHTML = "Put your number man 😠"
        e.preventDefault();
    }

    // Validation for Password
    if (password.value == "" || password.value == "null") {
        let passwordMsg = document.getElementById('password-msg');
        passwordMsg.innerHTML = "Put your fucking password! 😑"
        e.preventDefault();
    }

    if (password.value == "password") {
        let passwordMsg = document.getElementById('password-msg');
        passwordMsg.innerHTML = "Bruh password can't be password 😆"
        e.preventDefault();
    }

    if (password.value < 6) {
        let passwordMsg = document.getElementById('password-msg');
        passwordMsg.innerHTML = "Password can't be less than 6 characters 🤨"
        e.preventDefault();
    }

    // Validation to confirm password
    if (confirmPassword.value !== password.value) {
        let confirmMsg = document.getElementById('confirm-msg');
        confirmMsg.innerHTML = "password don't match nigga 🤪"
        e.preventDefault();
    }

    if (confirmPassword.value == "" || confirmPassword.value == "null") {
        let confirmMsg = document.getElementById('confirm-msg');
        confirmMsg.innerHTML = "Confirm your password 😫"
        e.preventDefault();
    }
})
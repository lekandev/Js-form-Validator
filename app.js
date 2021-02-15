// Get Elements id in the form element
const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// prevent default submit
form.addEventListener("submit", (e) => {
    // Validation for Username
    if (username.value == "" || username.value == "null") {
        alert("fill this shit up");
        e.preventDefault();
    }

    // Validation for Email
    if (email.value == "" || email.value == "null") {
        alert("fill this shit up");
        e.preventDefault();
    }

    // Validation for Phone number
    if (phone.value == "" || phone.value == "null") {
        alert("fill this shit up");
        e.preventDefault();
    }

    // Validation for Password
    if (password.value == "" || password.value == "null") {
        alert("fill this shit up");
        e.preventDefault();
    }

    // Validation to confirm password
    if (confirmPassword.value !== password.value || confirmPassword.value == "null") {
        alert("password don't match nigga");
        e.preventDefault();
    }
})
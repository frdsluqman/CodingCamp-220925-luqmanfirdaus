let welcome = prompt('Enter your name :')
document.querySelector('#welcome').innerText = welcome

// get navbar class
const navbarNav = document.querySelector('.navbar-nav');
// when hamburger menu clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//close hamburger menu wherever clicked
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

// get data from form
const nameInput = document.querySelector('#name');
const email = document.querySelector('#mail');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const error = document.querySelectorAll('.error');

// validate form
function validateForm() {

    clearMessage()

    let errorNotif = false;

    if (nameInput.value.length < 1) {
        error[0].innerText = "This name field is required!"
        errorNotif = true
    }

    if (!emailisValid(mail.value)) {
        error[1].innerText = "Invalid email address"
        errorNotif = true
    }

    if (number.value.length < 11) {
        error[2].innerText = "Phone number must be 11 or 12 digits"
        errorNotif = true
    }

    if (message.value.length < 1) {
        error[3].innerText = "Please enter a message"
        errorNotif = true
    }

    if(!errorNotif) {
        success.innerText = "Success!"
    }
}

// Clear error/success message
function clearMessage() {
    for (let i = 0; i < error.length; i++) {
        error[i].innerText = ""
    }

    success.innerText = ""
}

// validate email
function emailisValid(mail) {
    let emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(mail)
}
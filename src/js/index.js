const form = document.getElementById('form')
const getEmail = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const getEmailValue = getEmail.value;

    if ((getEmailValue == "") || (getEmailValue.indexOf('@') == -1)
        || (getEmailValue.indexOf('.') == -1)) {
        error(getEmail, "Please provide a valid email");
    }
}

function error(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = "form-control error";

}

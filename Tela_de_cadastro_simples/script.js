const allForm = document.querySelector('.form_register')
const userName = document.querySelector('.user_name')
const userEmail = document.querySelector('.user_email')
const password = document.querySelector('.password')
const passwordConfirmation = document.querySelector('.password_confirmation')

allForm.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
})
userName.addEventListener('blur', () => {
    checkInputUserName();
})
userEmail.addEventListener('blur', () => {
    checkInputUserEmail();
})
password.addEventListener('blur', () => {
    checkInputPassword();
})
passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfirmation();
})
function checkInputUserName() {
    const userNameValue = userName.value;
    if(userNameValue === "") {
        errorInput(userName, "Esse campo é obrigatório");
    } else{
        const formItem = userName.parentElement;
        formItem.className = "form_content";
        
    }
}
function checkInputUserEmail() {
    const userEmailValue = userEmail.value;
    if(userEmailValue === "") {
        errorInput(userEmail, "Esse campo é obrigatório");
    } else{
        const formItem = userEmail.parentElement;
        formItem.className = "form_content";
        
    }
}
function checkInputPassword() {
    const passwordValue = password.value;
    if(passwordValue === "") {
        errorInput(password, "Esse campo é obrigatório");
    } else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres")
    } else{
        const formItem = password.parentElement;
        formItem.className = "form_content";
        
    }
}
function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if(passwordConfirmationValue === "") {
        errorInput(passwordConfirmation, "Esse campo é obrigatório");
    } else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais")
    } else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form_content";
        
    }
}
function errorInput (input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p");
    textMessage.innerText = message;
    formItem.className = "form_content error";
}
function checkForm() {
    checkInputUserName ();
    checkInputUserEmail ();
    checkInputPassword ();
    checkInputPasswordConfirmation();

    const formItems = allForm.querySelectorAll('.form_content')
    const isValid = [... formItems].every((items) => {
        return items.className === 'form_content'
    });
    if(isValid){
        alert('Cadastrado com sucesso!')
    }
}
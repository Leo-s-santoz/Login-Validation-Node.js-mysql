let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textPassword = document.getElementById('textPassword');

form.addEventListener('submit' , (e) => {
    if(email.value == '' || password.value == '' ){
        textForm.textContent = 'Preencha todos os campos!'
    }else if(validEmail(email.value) === true && validPassword(password.value) === true){
        console.log(email.value);
        console.log(password.value);        
        textForm.textContent = "";
        textPassword.textContent = "";
        textEmail.textContent = "";
    }else{
        console.log("Requisição não atendida");
    }
    e.preventDefault()
})

password.addEventListener("keyup", () => {
    if(validPassword (password.value) !== true){
        textPassword.textContent = "A senha precisa conter pelo menos (1) letra minuscula, (1) letra maiuscula, (1) numero e (1) caracter epecial"
    }else{
        textPassword.textContent = "";
    }
})

email.addEventListener("keyup", () => {
    if (validEmail(email.value) !== true) {
      textEmail.textContent = "O formato do email deve ser Ex: exemplo@gmail.com";
    } else {
      textEmail.textContent = "";
    }
  });

function validEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
}

function validPassword(password){
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textPassword = document.getElementById('textPassword');

form.addEventListener('submit' , (e) => {
    if(validEmail(email.value) === true && validPassword(password.value) === true){
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        alert('Cadastro realizado com sucesso');
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
        textPassword.textContent = "A senha precisa conter pelo menos (1) letra minuscula, (1) letra maiuscula, (1) numero, (1) caracter epecial e 8 digitos"
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
    const passwordPattern = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@$!%#*?&])[A-Za-z0-9@$!%#*?&]{8,}$/;
    return passwordPattern.test(password);
}
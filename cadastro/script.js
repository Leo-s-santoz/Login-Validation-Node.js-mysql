let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textPassword = document.getElementById('textPassword');

  //gera o hash e converte para string
  function sha512(value) {
    let hash = CryptoJS.SHA512(value).toString(CryptoJS.enc.Hex);
    return hash;
  }
  
form.addEventListener('submit' , (e) => {
    console.log('àlek')
    if(validEmail(email.value) === true && validPassword(password.value) === true){
        localStorage.setItem('email', email.value);
        let hashedpassword =  sha512(password.value)
        localStorage.setItem('password', hashedpassword);
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
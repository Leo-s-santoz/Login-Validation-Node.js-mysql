function sha512(value) {
  let hash = CryptoJS.SHA512(value).toString(CryptoJS.enc.Hex);
  return hash;
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.form')
    formulario.addEventListener('submit', (e) => {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
  
      let storedEmail = localStorage.getItem('email');
      let storedPassword = localStorage.getItem('password');
      
      let hashedpassword = sha512(password);
      console.log(hashedpassword)
      console.log(storedPassword)
      if ((email === storedEmail) === true && (hashedpassword === storedPassword) === true){
        alert('Login bem-sucedido!');
      } else {
        alert("Credenciais inválidas. Tente novamente.");
        e.preventDefault();
      }
    });
});

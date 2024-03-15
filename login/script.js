function sha512(value) {
  // Gera o hash SHA-512 do valor fornecido usando crypto-js
  let hash = CryptoJS.SHA512(value).toString(CryptoJS.enc.Hex);
  
  // Retorna o hash como uma string
  return hash;
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let hashedpassword =  sha512(password.value)
      localStorage.setItem('password', hashedpassword);
      let storedEmail = localStorage.getItem('email');
      let storedPassword = localStorage.getItem('password');
      
      if (email === storedEmail && hashedpassword === storedPassword) {
        alert('Login bem-sucedido!');
        document.getElementById('textForm').textContent = '';
      } else {
        document.getElementById('textForm').textContent = 'Credenciais inválidas. Tente novamente.';
        e.preventDefault();
        alert ('Lo')
        }
    });
  });
  
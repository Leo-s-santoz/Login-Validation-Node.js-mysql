document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
  
      let storedEmail = localStorage.getItem('email');
      let storedPassword = localStorage.getItem('password');
  
      if (email === storedEmail && password === storedPassword) {
        alert('Login bem-sucedido!');
        document.getElementById('textForm').textContent = '';
      } else {
        document.getElementById('textForm').textContent = 'Credenciais inválidas. Tente novamente.';
        e.preventDefault();
        }
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
    // Event listener para o formulário
    document.querySelector('form').addEventListener('submit', function (e) {
      // Obter valores do formulário
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      // Obter valores armazenados no localStorage
      var storedEmail = localStorage.getItem('email');
      var storedPassword = localStorage.getItem('password');
  
      // Verificar se o email e a senha correspondem aos valores armazenados
      if (email === storedEmail && password === storedPassword) {
        // Caso correspondam, mostrar alerta de login bem-sucedido
        alert('Login bem-sucedido!');
        document.getElementById('textForm').textContent = '';
      } else {
        // Caso contrário, mostrar mensagem de erro no texto do formulário
        document.getElementById('textForm').textContent = 'Credenciais inválidas. Tente novamente.';
        e.preventDefault(); // Impede o envio do formulário se as credenciais forem inválidas
      }
    });
  });
  
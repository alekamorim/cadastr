document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    
    const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
  
    if (email && senha) {
      if (!senhaValida.test(senha)) {
        alert('A senha deve ter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial.');
      } else {
        alert('Cadastro realizado com sucesso!');
        
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  
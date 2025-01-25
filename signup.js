document.getElementById('cardForm').addEventListener('submit', function (event) {

    event.preventDefault(); // Evita o comportamento padrão do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    alert(`Formulário enviado!\nNome: ${nome}\nE-mail: ${email}`);
    
  });

  function salvarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;
  
    localStorage.setItem('dados', JSON.stringify({ nome, email, telefone, senha }));
    alert('Dados salvos com sucesso!');
  }

  const btnLogin = document.getElementById('btn-login');
const modal = document.getElementById('modal-login');
const span = document.getElementsByClassName("close")[0];
const formLogin = document.getElementById('form-login');

btnLogin.addEventListener('click', () => {
  modal.style.display = "block";
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Recupera os dados do Local Storage
  const dadosSalvos = localStorage.getItem('dados');
  const usuario = JSON.parse(dadosSalvos);

  // Verifica se os dados correspondem
  if (usuario && email === usuario.email && senha === usuario.senha) {
    alert('Login realizado com sucesso!');
    // Redirecionar para a página restrita ou executar outra ação
  } else {
    alert('Email ou senha incorretos.');
  }

  modal.style.display = "none";
});
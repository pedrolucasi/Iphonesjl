document.getElementById('cardForm').addEventListener('submit', function (event) {

    event.preventDefault(); // Evita o comportamento padrão do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    alert(`Formulário enviado!\nNome: ${nome}\nE-mail: ${email}`);
    
  });
export function salvar() {
    // Obtenha os valores dos campos do formulário
    console.log("a funcao salvar() foi chamada")
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    // Crie um objeto com os dados do formulário
    const dados = {
      nome: nome,
      telefone: telefone,
      email: email,
      senha: senha
    };
  
    // Converta o objeto para uma string JSON
    const dadosJSON = JSON.stringify(dados);
  
    // Armazene a string JSON no localStorage
    localStorage.setItem("dados_usuario", dadosJSON);
  
    // Exiba uma mensagem de sucesso (opcional)
    alert("Dados salvos com sucesso!");
  
    
    
  }
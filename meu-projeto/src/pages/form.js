export function salvar() {
  
    console.log("a funcao salvar() foi chamada")
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
  
    const dados = {
      nome: nome,
      telefone: telefone,
      email: email,
      senha: senha
    };
  
  
    const dadosJSON = JSON.stringify(dados);
  
    localStorage.setItem("dados_usuario", dadosJSON);
  
    alert("Dados salvos com sucesso!");
  
    
    
  }
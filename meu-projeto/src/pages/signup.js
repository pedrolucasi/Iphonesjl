//document.getElementById('cardForm').addEventListener('submit', function (event) {
   // event.preventDefault(); // Evita o comportamento padrão do formulário
   // const nome = document.getElementById('nome').value;//
   /// const email = document.getElementById('email').value;//
   // alert(`Formulário enviado!\nNome: ${nome}\nE-mail: ${email}`);//
    
  //});


export function getFormData(formId) {
  const form = document.getElementById(formId);
  if (!form) {
      console.error(`O formulário com ID "${formId}" não foi encontrado.`);
      return null;
  }

  const formData = Array.from(form.elements)
      .filter((el) => el.name) 
      .map((el) => ({ name: el.name, value: el.value })); 
  
  return formData;
}


export function validateFormData(data) {
  const invalidFields = data.filter((field) => !field.value);
  return invalidFields;
}


export function generateMessage(data) {
  return data.reduce((message, field) => {
      return message + `${field.name}: ${field.value}\n`;
  }, '');
}


export function setupSignupForm(formId) {
  const form = document.getElementById(formId);

  if (!form) {
      console.error(`O formulário com ID "${formId}" não foi encontrado.`);
      return;
  }

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = getFormData(formId); 
      if (!formData) return;

     
      const invalidFields = validateFormData(formData);
      if (invalidFields.length > 0) {
          alert(`Preencha os campos obrigatórios: ${invalidFields.map((f) => f.name).join(', ')}`);
          return;
      }

   
      const message = generateMessage(formData);
      alert(`Formulário enviado!\n${message}`);
  });
}


function adicionarDados() {
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;

  // Verifica se o Local Storage está disponível no navegador
  if (typeof(Storage) !== "undefined") {

    const dados = {
      email: email,
      nome: nome,
      telefone: telefone,
      senha: senha
    };

    const dadosJSON = JSON.stringify(dados);
    localStorage.setItem("dados_usuario", dadosJSON);

    console.log("Dados adicionados ao Local Storage com sucesso!");

    // Limpa o formulário após salvar os dados (opcional)
    document.getElementById("formularioUsuario").reset();

  } else {
    console.error("Local Storage não suportado neste navegador.");
  }
}








  

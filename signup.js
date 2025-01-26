//document.getElementById('cardForm').addEventListener('submit', function (event) {
   // event.preventDefault(); // Evita o comportamento padrão do formulário
   // const nome = document.getElementById('nome').value;//
   /// const email = document.getElementById('email').value;//
   // alert(`Formulário enviado!\nNome: ${nome}\nE-mail: ${email}`);//
    
  //});

// signup.js

// Extrai e processa os dados do formulário
export function getFormData(formId) {
  const form = document.getElementById(formId);
  if (!form) {
      console.error(`O formulário com ID "${formId}" não foi encontrado.`);
      return null;
  }

  // Converte os campos do formulário para um array, e mapeia para pares chave-valor
  const formData = Array.from(form.elements)
      .filter((el) => el.name) // Filtra elementos com o atributo "name" (descarta buttons, etc.)
      .map((el) => ({ name: el.name, value: el.value })); // Mapeia para { name, value }
  
  return formData;
}

// Valida os dados do formulário
export function validateFormData(data) {
  const invalidFields = data.filter((field) => !field.value);
  return invalidFields;
}

// Gera uma mensagem final usando reduce
export function generateMessage(data) {
  return data.reduce((message, field) => {
      return message + `${field.name}: ${field.value}\n`;
  }, '');
}

// Configura o evento de envio
export function setupSignupForm(formId) {
  const form = document.getElementById(formId);

  if (!form) {
      console.error(`O formulário com ID "${formId}" não foi encontrado.`);
      return;
  }

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita o comportamento padrão do formulário

      const formData = getFormData(formId); // Extrai os dados do formulário
      if (!formData) return;

      // Valida os dados e alerta caso algo esteja inválido
      const invalidFields = validateFormData(formData);
      if (invalidFields.length > 0) {
          alert(`Preencha os campos obrigatórios: ${invalidFields.map((f) => f.name).join(', ')}`);
          return;
      }

      // Gera a mensagem consolidada e exibe
      const message = generateMessage(formData);
      alert(`Formulário enviado!\n${message}`);
  });
}


  

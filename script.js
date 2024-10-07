const nameInput = document.getElementById('nameInput');
const addNameButton = document.getElementById('addNameButton');
const clearButton = document.getElementById('clearButton');
const nameList = document.getElementById('nameList');
const drawButton = document.getElementById('drawButton');
const result = document.getElementById('result');

let names = [];

// Função para adicionar nome à lista
addNameButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name !== "") {
    names.push(name);
    updateNameList();
    nameInput.value = ''; // Limpa o input
  }
});

// Função para limpar todos os nomes da lista
clearButton.addEventListener('click', () => {
  names = [];
  updateNameList();
  result.textContent = ''; // Limpa o resultado também
});

// Função para deletar um nome da lista
function deleteName(index) {
  names.splice(index, 1); // Remove o nome pelo índice
  updateNameList();
}

// Atualiza a lista de nomes no HTML
function updateNameList() {
  nameList.innerHTML = '';
  names.forEach((name, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${name}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Excluir";
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => deleteName(index));

    li.appendChild(deleteButton);
    nameList.appendChild(li);
  });
}

// Função para sortear um nome com animação
drawButton.addEventListener('click', () => {
  if (names.length > 0) {
    // Adiciona a animação
    result.classList.add('animate');
    result.textContent = 'Sorteando...';

    // Simula uma pequena espera antes de mostrar o nome sorteado
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * names.length);
      const drawnName = names[randomIndex];
      result.classList.remove('animate');
      result.textContent = `Nome sorteado: ${drawnName}`;
    }, 2000); // 2 segundos de espera
  } else {
    result.textContent = "Nenhum nome adicionado!";
  }
});

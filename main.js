const nextIndex = (currentIndex, length) => (currentIndex + 1) % length;

// Função para alternar os cards
const autoToggleCards = () => {
    // Recupera os elementos dos cards
    const cards = [...document.querySelectorAll('.card')]; // Converte NodeList para Array

    // Identifica o card ativo no início
    let currentIndex = cards.findIndex(card => card.classList.contains('ativo'));

    // Configura o intervalo para alternar os cards automaticamente
    setInterval(() => {
        // Remove a classe "ativo" do card atual
        cards[currentIndex].classList.remove('ativo');

        // Determina o próximo índice do card ativo
        currentIndex = nextIndex(currentIndex, cards.length);

        // Adiciona a classe "ativo" ao próximo card
        cards[currentIndex].classList.add('ativo');
    }, 5000); // Troca de card a cada 3 segundos
};

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', autoToggleCards);
const nextIndex = (currentIndex, length) => (currentIndex + 1) % length;

// Função para alternar os cards
const autoToggleCards = () => {
    const cards = [...document.querySelectorAll('.card')]; // Converte NodeList para Array

    // A primeira verificação pode ser feita diretamente para garantir que um card inicial tenha a classe 'ativo'
    let currentIndex = cards.findIndex(card => card.classList.contains('ativo'));
    
    if (currentIndex === -1) {
        // Se nenhum card estiver ativo, faz o primeiro card começar visível
        currentIndex = 0;
        cards[currentIndex].classList.add('ativo'); // Adiciona a classe 'ativo' ao primeiro card
    }

    setInterval(() => {
        // Remove a classe "ativo" do card atual
        cards[currentIndex].classList.remove('ativo');

        // Determina o próximo índice do card ativo
        currentIndex = nextIndex(currentIndex, cards.length);

        // Adiciona a classe "ativo" ao próximo card
        cards[currentIndex].classList.add('ativo');
    }, 5000); // Troca de card a cada 5 segundos
};

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', autoToggleCards);

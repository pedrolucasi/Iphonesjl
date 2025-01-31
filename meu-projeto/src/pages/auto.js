
export const nextIndex = (currentIndex, length) => (currentIndex + 1) % length;

export const autoToggleCards = () => {
    const cards = [...document.querySelectorAll('.card')]; 

    let currentIndex = cards.findIndex(card => card.classList.contains('ativo'));
    if (currentIndex === -1) {
        currentIndex = 0;
        cards[currentIndex].classList.add('ativo');
    }

    setInterval(() => {
        cards[currentIndex].classList.remove('ativo');
        currentIndex = nextIndex(currentIndex, cards.length);
        cards[currentIndex].classList.add('ativo');
    }, 5000);
};


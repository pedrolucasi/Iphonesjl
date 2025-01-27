
import { setupSignupForm } from './signup.js';

// Inicializa o formulário com ID 'cardForm'
document.addEventListener('DOMContentLoaded', () => {
    setupSignupForm('cardForm');
});

import { autoToggleCards } from './auto.js';

document.addEventListener('DOMContentLoaded', autoToggleCards);



import { products } from './products.js';

// Função para renderizar os produtos no DOM
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products
        .map(product => `
            <div class="card">
                <img src="images/${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>A partir de R$ ${product.price.toLocaleString('pt-BR')}</p>
                <button onclick="buyProduct(${product.id})">Comprar</button>
            </div>
        `)
        .join('');
}

// Função para simular a compra de um produto
function buyProduct(id) {
    const product = products.find(p => p.id === id);
    alert(`Você comprou: ${product.name}`);
}

// Exemplo de uso de Array.filter() para buscar produtos acima de um valor específico
function filterExpensiveProducts(minPrice) {
    return products.filter(product => product.price > minPrice);
}

// Exemplo de uso de Array.reduce() para calcular o valor total dos produtos
function calculateTotalValue() {
    return products.reduce((total, product) => total + product.price, 0);
}

// Inicialização
renderProducts();
console.log("Produtos caros:", filterExpensiveProducts(8000));
console.log("Valor total do inventário:", calculateTotalValue().toLocaleString('pt-BR'));




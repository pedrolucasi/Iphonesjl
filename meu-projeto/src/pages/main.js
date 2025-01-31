
import { setupSignupForm } from './signup.js';


document.addEventListener('DOMContentLoaded', () => {
    setupSignupForm('cardForm');
});

import { autoToggleCards } from './auto.js';

document.addEventListener('DOMContentLoaded', autoToggleCards);



import { products  } from './products.js';

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


function buyProduct(id) {
    const product = products.find(p => p.id === id);
    alert(`Você comprou: ${product.name}`);
}


function filterExpensiveProducts(minPrice) {
    return products.filter(product => product.price > minPrice);
}


function calculateTotalValue() {
    return products.reduce((total, product) => total + product.price, 0);
}


renderProducts();
console.log("Produtos caros:", filterExpensiveProducts(8000));
console.log("Valor total do inventário:", calculateTotalValue().toLocaleString('pt-BR'));


function salvarDados(){
    localStorage.info = document.getElementById("nome").value
    
}


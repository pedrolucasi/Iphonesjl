// app.js

const products = [
    { id: 1, name: "iPhone 16 Pro e iPhone 16 Pro Max", price: 10499, image: "iphone16pro.png" },
    { id: 2, name: "iPhone 15 Pro Max", price: 7799, image: "iphone15pro.png" },
    { id: 3, name: "iPhone 14 Plus", price: 6499, image: "iphone14plus.webp" },
    { id: 4, name: "iPhone 13 Pro Max", price: 12999, image: "iphone13max.webp" },
    { id: 5, name: "iPhone 12", price: 10999, image: "iphone12.webp" },
    { id: 6, name: "iPhone 12 Pro Max", price: 8499, image: "iphone12promax.webp" },
    { id: 7, name: "iPhone 15 Plus", price: 6799, image: "iphone15plus.png" },
    { id: 8, name: "iPhone 14 Pro Max", price: 4499, image: "iphone14max.webp" }
];

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

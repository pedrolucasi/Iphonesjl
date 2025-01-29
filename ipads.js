const products = [
    { id: 1, name: "iPad Pro", price: 8999, image: "ipad.jpg" },
    { id: 2, name: "iPad Air", price: 6499, image: "iPad-2020.png" },
    { id: 3, name: "iPad Mini", price: 4999, image: "ipadpink.webp" },
    { id: 4, name: "iPad 10ª Geração", price: 5499, image: "ipadair6.webp" },
    { id: 5, name: "iPad Pro 11", price: 9599, image: "ipadnovo.jpeg" },
    { id: 6, name: "iPad Air 5ª Geração", price: 6799, image: "ipadair6.webp" },
    { id: 7, name: "iPad Mini 6ª Geração", price: 5099, image: "1-24.webp" },
    { id: 8, name: "iPad 9ª Geração", price: 3999, image: "Best-iPadT2.webp" }
    
];

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


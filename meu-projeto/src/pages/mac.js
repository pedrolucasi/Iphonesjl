const products = [
    { id: 1, name: "MacBook Air", price: 12999, image: "macbookpro14.jpg" },
    { id: 2, name: "MacBook Pro 13", price: 16999, image: "macbook-pro.png" },
    { id: 3, name: "MacBook Pro 14", price: 21999, image: "macbookpro14.jpg" },
    { id: 4, name: "MacBook Pro 16", price: 27999, image: "macbook-pro.png" },
    { id: 5, name: "MacBook Air M2", price: 14999, image: "mac-card.jpg" },
    { id: 6, name: "MacBook Pro 14 M2 Pro", price: 24999, image: "mac-card-140.jpg" },
    { id: 7, name: "MacBook Pro 16 M2 Pro", price: 31999, image: "mac-card.jpg" },
    { id: 8, name: "MacBook Pro 16 M1 Max", price: 34999, image:"mac-card-140.jpg" }

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


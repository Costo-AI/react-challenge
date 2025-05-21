const fs = require('fs');

const categories = ['Electronics', 'Clothing', 'Home', 'Toys', 'Books', 'Fitness', 'Beauty'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPrice(min = 5, max = 200) {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

function generateProducts(count = 500) {
  const products = [];
  for (let i = 1; i <= count; i++) {
    products.push({
      id: `p${i.toString().padStart(3, '0')}`,
      name: `Product ${i}`,
      category: getRandomItem(categories),
      price: getRandomPrice(),
      isFavorite: Math.random() < 0.2 // ~20% chance
    });
  }
  return products;
}

const products = generateProducts();
fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2));
console.log('✔ products.json generated with', products.length, 'items.');

let product = [
  { shirtName: "sone", brand: "polo", price: 100, size: 38 },
  { shirtName: "sone", brand: "polo", price: 500, size: 38 },
  { shirtName: "sone", brand: "polo", price: 700, size: 40 },
  { shirtName: "sone", brand: "polo", price: 900, size: 42 },
  { shirtName: "sone", brand: "polo", price: 1100, size: 44 },
  { shirtName: "sone", brand: "polo", price: 500, size: 38 },
];
let newProduct = [];
newProduct = product.filter((p) => p.price > 500);
console.log(newProduct);
let { price } = product;

for (let { price } of product) {
  
}

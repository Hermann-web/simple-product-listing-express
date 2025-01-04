var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const Ingredient = {
  SUGAR: { name: 'Sugar', co2: 1.2 },
  SALT: { name: 'Salt', co2: 0.5 },
  FLOUR: { name: 'Flour', co2: 1.8 },
  BUTTER: { name: 'Butter', co2: 2.5 },
  MILK: { name: 'Milk', co2: 1.3 },
  EGG: { name: 'Egg', co2: 1.1 }
};

const products = [
  { id: 1, name: 'Product 1', price: 100, img: '/images/img1.jpg', category: 'Category 1', ingredients: [Ingredient.SUGAR, Ingredient.FLOUR] },
  { id: 2, name: 'Product 2', price: 200, img: '/images/img2.jpg', category: 'Category 2', ingredients: [Ingredient.SALT, Ingredient.BUTTER] },
  { id: 3, name: 'Product 3', price: 300, img: '/images/img3.jpg', category: 'Category 3', ingredients: [Ingredient.MILK, Ingredient.EGG] },
  { id: 4, name: 'Product 4', price: 400, img: '/images/img4.jpg', category: 'Category 4', ingredients: [Ingredient.SUGAR, Ingredient.MILK, Ingredient.EGG] },
  { id: 5, name: 'Product 5', price: 150, img: '/images/img5.jpg', category: 'Category 1', ingredients: [Ingredient.SALT, Ingredient.FLOUR] },
  { id: 6, name: 'Product 6', price: 250, img: '/images/img6.jpg', category: 'Category 2', ingredients: [Ingredient.BUTTER, Ingredient.MILK] },
  { id: 7, name: 'Product 7', price: 350, img: '/images/img7.jpg', category: 'Category 3', ingredients: [Ingredient.EGG, Ingredient.SUGAR] },
  { id: 8, name: 'Product 8', price: 450, img: '/images/img8.jpg', category: 'Category 4', ingredients: [Ingredient.FLOUR, Ingredient.MILK] }
];

products.forEach(product => {
  product.totalFootprint = product.ingredients.reduce((total, ingredient) => total + ingredient.co2, 0).toFixed(2);
});

router.get('/products', function(req, res, next) {
  res.json(products);
});

router.get('/products/view', function(req, res, next) {
  res.render('products', { title: 'Product List', products: products });
});

router.get('/products/:id', function(req, res, next) {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

router.get('/products/:id/view', function(req, res, next) {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.render('product', { title: 'Product Details', product: product });
  } else {
    res.status(404).send('Product not found');
  }
});

module.exports = router;

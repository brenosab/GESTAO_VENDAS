const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/', productController.listProducts);
router.post('/', productController.createProduct);
router.get('/:friend',productController.getProducts);
router.put('/:id', productController.updateProduct);

module.exports = router;
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/:linhasPorPagina/:pagina', productController.listProducts);
router.post('/', productController.createProduct);
router.get('/:id',productController.getProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
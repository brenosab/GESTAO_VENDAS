const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/',productController.getProducts);

router.get('/:linhasPorPagina/:pagina', productController.listProducts);
router.post('/', productController.createProduct);
router.post('/image/', productController.createImage);
router.get('/:id',productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
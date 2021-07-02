const express = require('express');
const router = express.Router();
const saleController = require('../controllers/sale-controller');

router.get('/', saleController.listSales);
router.post('/', saleController.createSale);
router.get('/:id',saleController.getSales);
router.put('/:id', saleController.updateSale);

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Api Gerenciamento de Estoque e Vendas',
    version: '1.0.0',
  });
});

module.exports = router;
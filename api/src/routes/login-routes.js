const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

// router.get('/login/:email&:senha',userController.getUserLogin);
router.get('/',userController.getUserLogin);

module.exports = router;
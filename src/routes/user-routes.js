const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.get('/', userController.listUsers);
router.post('/', userController.createUser);
router.get('/:id',userController.getUsers);
router.put('/:id', userController.updateUser);

module.exports = router;
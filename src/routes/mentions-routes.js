const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions);
router.post('/', mentionsController.createMention);
router.get('/:friend',mentionsController.getMentions);
router.put('/', mentionsController.updateMention);

module.exports = router;
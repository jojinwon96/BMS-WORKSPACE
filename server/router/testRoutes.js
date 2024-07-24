const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.get('/list', testController.getTest);

module.exports = router;

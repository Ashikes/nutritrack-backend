const express = require('express');
const router = express.Router();
const { getDiets, addDiet } = require('../controllers/dietController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getDiets);
router.post('/', authMiddleware, addDiet);

module.exports = router;

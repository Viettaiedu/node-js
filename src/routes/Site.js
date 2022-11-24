const homeController = require('../app/controllers/SiteController')
const express = require('express');
const router = express.Router();

router.get('/search', homeController.search);
router.get('/', homeController.home);

module.exports = router;
const express = require('express');
const router = express.Router();
const {generateCode,redirectUrl,analyticsUrl} = require('../controllers/url');

//routes
router.post("/",generateCode);
router.get("/:shortid",redirectUrl);
router.get('/analytics/:shortid',analyticsUrl)
module.exports = router;
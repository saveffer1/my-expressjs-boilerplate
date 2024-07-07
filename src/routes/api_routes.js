const router = require('express').Router();
const path = require('path');
const router_config = require('../config/routes_config');

router.get('/', (req, res) => {
    // json response
    res.json({
        message: "Hello, World!"
    });
});

module.exports = router;
const router = require('express').Router();
const path = require('path');
const router_config = require('../config/routes_config');

const pubdir = new router_config.PublicDir();

router.get('/', (req, res) => {
    res.sendFile(path.join(pubdir.htmldir, 'index.html'));
});

module.exports = router;
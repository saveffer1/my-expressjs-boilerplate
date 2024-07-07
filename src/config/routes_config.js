const path = require('path');

// Public directory path
class PublicDir {
    constructor() {
        this.pubdir = path.join(__dirname, '../../public');
        this.htmldir = path.join(this.pubdir, 'html');
        this.imgdir = path.join(this.pubdir, 'images');
    };
}

module.exports = {
    PublicDir
};
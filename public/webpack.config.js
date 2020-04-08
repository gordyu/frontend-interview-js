const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.ejs'),
    output: {
        path: path.resolve(__dirname, '..'),
        filename: 'bundle.js'
    }
};
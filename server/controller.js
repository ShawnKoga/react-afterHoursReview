const products = require('./data');

module.exports = {
    getProducts: (req, res) => {
        res.send(products.products)
    }

}

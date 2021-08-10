const mongoose = require('mongoose');
const Product = mongoose.model('Product');


// get
exports.getProduct = async data => {
  return await Product.findOne({ "_id": data });
};

function isNumber(value) {
  return !isNaN(parseInt(value, 0)) && isFinite(value);
}
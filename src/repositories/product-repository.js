const mongoose = require('mongoose');
const Product = mongoose.model('Product');


// get
exports.getMentions = async data => {
  if(isNumber(data)){
    return await Product.findOne({ id: data });
  }
  else{
    return await Product.findOne({ nome: data });
  }
};
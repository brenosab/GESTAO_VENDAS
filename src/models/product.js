const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  estoque: {
    type: Number,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Product', schema);
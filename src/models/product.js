const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: Number,
  },
  nome: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Product', schema);
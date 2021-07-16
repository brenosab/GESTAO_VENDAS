const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: {
    type: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: { 
    type: Date, 
    //default: Date.now, 
    required: true 
  },
  products: [
    {
      codigo: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      quantidade: { type: Number }
    }
  ]
});

module.exports = mongoose.model('Sale', schema);
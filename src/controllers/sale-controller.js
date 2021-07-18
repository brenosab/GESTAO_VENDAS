const mongoose = require('mongoose');
const Sale = mongoose.model('Sale');

// list
exports.listSales = async (req, res) => {
  try {
    const data = await Sale.find().populate(['products']);

    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as vendas.'});
  }
};

// create
exports.createSale = async (req, res) => {
  try {
    const sale = new Sale({
      user: req.body.user,
      products: req.body.products,
      date: req.body.date
    });

    await sale.save();

    res.status(201).send({message: 'Venda cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a venda.'});
  }
};

// get
exports.getSales = async (req, res) => {
  try {

    const data = await Sale.findOne({ id: req.params.id });
    res.status(200).send(data);    
    
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as vendas.'});
  }
};

// update
exports.updateSale = async (req, res) => {
  try {

    const filter = { id: req.params.id };

    //const exist = this.getSales(new { params: { friend: req.body.friend }},null);

    const doc = await Sale.findOneAndUpdate(filter, req.body, { new: true, upsert: true });

    res.status(201).send(doc);
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a venda.'});
  }
};

// delete
exports.deleteSale = async (req, res) => {
  try {

    await Sale.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: 'Venda removida com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover a venda.'});
  }
};
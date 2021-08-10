const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const repository = require('../repositories/product-repository');

// list
exports.listProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os produtos.'});
  }
};

// create
exports.createProduct = async (req, res) => {
  try {
    const product = new Product({
      nome: req.body.nome,
      categoria: req.body.categoria,
      valor: req.body.valor,
      estoque: req.body.estoque
    });

    await product.save();

    res.status(201).send({message: 'Produto cadastrado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o produto.'});
  }
};

// get
exports.getProducts = async (req, res) => {
  try {

    var data = await repository.getProduct(req.params.id);
    res.status(200).send(data); 

  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar o produto.'});
  }
};

// update
exports.updateProduct = async (req, res) => {
  try {

    const filter = { id: req.params.id };

    //const exist = this.getProducts(new { params: { friend: req.body.friend }},null);

    const doc = await Product.findOneAndUpdate(filter, req.body, { new: true, upsert: true });

    res.status(201).send(doc);
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o produto.'});
  }
};

// delete
exports.deleteProduct = async (req, res) => {
  try {

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: 'Produto removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover o produto.'});
  }
};
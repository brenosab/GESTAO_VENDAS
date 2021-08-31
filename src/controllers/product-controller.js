const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Mentions = mongoose.model('Mentions');
const fs = require('fs');
const repository = require('../repositories/product-repository');

// get with filters
exports.getProducts = async (req, res) => {
  try {
    let produto = req.query.produto;
    let categoria = req.query.categoria;

    var data = await repository.getProducts(produto, categoria);
    res.status(200).send({ products: data }); 

  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar o produto.'});
  }
};

// list
exports.listProducts = async (req, res) => {
  try {
    var data = await repository.getAll(req.params.linhasPorPagina, req.params.pagina);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os produtos.'});
  }
};

// list images
exports.listProductImages = async (req, res) => {
  try {
    var data = await repository.getAllProductImages();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as imagens.'});
  }
};

// create
exports.createProduct = async (req, res) => {
  try {
    const product = new Product({
      nome: req.body.nome,
      categoria: req.body.categoria,
      valor: req.body.valor,
      estoque: req.body.estoque,
      productImage: req.file.path
    });

    await product.save();

    res.status(201).send({message: 'Produto cadastrado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o produto.'});
  }
};

// get
exports.getProduct = async (req, res) => {
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
    const doc = await Product.findByIdAndUpdate(req.params.id, req.body);
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
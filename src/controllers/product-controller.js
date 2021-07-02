const mongoose = require('mongoose');
const Product = mongoose.model('Product');

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
      valor: req.body.valor 
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
    var filtro = req.params.filter;

    if(isNumber(filtro)){
      const data = await Product.findOne({ id: filtro });
      res.status(200).send(data);
    }
    else{
      const data = await Product.findOne({ nome: filtro });
      res.status(200).send(data);
    }
    
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os produtos.'});
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

function isNumber(value) {
  return !isNaN(parseInt(value, 0)) && isFinite(value);
}
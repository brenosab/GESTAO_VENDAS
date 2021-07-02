const mongoose = require('mongoose');
const User = mongoose.model('User');

// list
exports.listUsers = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os usuários.'});
  }
};

// create
exports.createUser = async (req, res) => {
  try {
    const user = new User({
      nome: req.body.nome,
      tipo: req.body.tipo,
      email: req.body.email,
      senha: req.body.senha
    });

    await user.save();

    res.status(201).send({message: 'Usuário cadastrado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o usuário.'});
  }
};

// get
exports.getUsers = async (req, res) => {
  try {

    const data = await User.findOne({ id: req.params.id });
    res.status(200).send(data);    
    
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os usuários.'});
  }
};

// update
exports.updateUser = async (req, res) => {
  try {

    const filter = { id: req.params.id };

    //const exist = this.getUsers(new { params: { friend: req.body.friend }},null);

    const doc = await User.findOneAndUpdate(filter, req.body, { new: true, upsert: true });

    res.status(201).send(doc);
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o usuário.'});
  }
};
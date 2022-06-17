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

    const data = await User.findOne({ _id: req.params.id });
    res.status(200).send(data);    
    
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar o usuário.'});
  }
};

//login
exports.getUserLogin = async (req, res) => {
  try {
    
    const email = req.headers.email;// + '@vendasnow.com';
    const senha = req.headers.senha;

    const data = await User.exists({ email: email, senha: senha });

    if(data == true){
      const user = await User.findOne({ email: email, senha: senha });
      res.status(200).send({ exist: data, user: user });
    }
    res.status(200).send({ exist: data, user: null });

  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar usuário.'});
  }
};


// update
exports.updateUser = async (req, res) => {
  try {
    const doc = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send(doc);
  } catch (e) {
    res.status(500).send({message: 'Falha ao atualizar o usuário.'});
  }
};

// delete
exports.deleteUser = async (req, res) => {
  try {

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: 'Usuário removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover o usuário.'});
  }
};
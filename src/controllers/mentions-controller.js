const repository = require('../repositories/mentions-repository');

// list
exports.listMentions = async (req, res) => {
  try {
    const data = await repository.listMentions();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// create
exports.createMention = async (req, res) => {
  try {
    await repository.createMention({
      friend: req.body.friend,
      mention: req.body.mention
    });

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};

// get
exports.getMentions = async (req, res) => {
  try {
    const friend = req.params.friend;
    const data = await repository.getMentions(friend);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// update
exports.updateMention = async (req, res) => {
  try {

    const filter = { friend: req.body.friend };
    //const exist = this.getMentions(new { params: { friend: req.body.friend }},null);

    const doc = await repository.updateMention(filter,req.body);
    res.status(201).send(doc);
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
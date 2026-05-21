const postModel = require('../models/postModel');


function salvar(req, res) {
  if (!req.file) {
    return res.status(400).send("Erro: Nenhuma imagem foi enviada ou o campo está incorreto.");
  }

  const imagem = req.file.filename;

  const {fkusuario, descricao, nome, email} = req.body

  const postagem = { fkusuario, imagem, descricao, nome, email }
  
  postModel.salvar(postagem)
  .then(resultado => {
    res.status(201).send("Postagem criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function buscarPost(req, res) {
  postModel.buscarTodos()
  .then(resultado => {
    res.status(200).json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = {
  salvar,
  buscarPost
}

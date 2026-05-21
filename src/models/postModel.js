const database = require("../database/config");

function salvar(postagem, idUsuario) {
  const instrucao = `insert into posts (fkusuario, descricao,imagem_perfil) values ('${postagem.fkusuario}','${postagem.descricao}', '${postagem.imagem}')`;

  return database.executar(instrucao);
}

function buscarTodos() {
  const instrucaoSql = `SELECT usuario.nome, usuario.email, posts.idPost, posts.descricao, posts.imagem_perfil FROM usuario JOIN posts ON fkusuario = idUsuario ORDER BY idPost DESC;`;
  
  return database.executar(instrucaoSql);
}

module.exports = {
  salvar,
  buscarTodos
};
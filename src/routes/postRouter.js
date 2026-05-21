const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const postController = require('../controllers/postController');

router.get("/", (req, res) => {
  res.render("index")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastro', upload.single('foto'), (req, res) => {
  postController.salvar(req, res);
});

router.get('/postagens', (req, res) => {
  postController.buscarPost(req, res);
});

module.exports = router;


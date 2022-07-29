const express = require('express');

const cadastro = require('./controladores/formulario');

const rotas = express();

// formulario de usuario salt
rotas.post('/cadastro', cadastro.cadastrarUsuario);

module.exports = rotas;
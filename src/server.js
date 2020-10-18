// importar plugin
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express (biblioteca)
const server = express();
server

   // utilizar body do req
   .use(express.urlencoded({ extended: true }))

   // utilizando arquivos estaticos
   .use(express.static('public'))

   // condifurar template engine
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'hbs')

   // rotas da aplica��o
   .get('/', pages.index)
   .get('/orphanage', pages.orphanage)
   .get('/orphanages', pages.orphanages)
   .get('/create-orphanage', pages.createOrphanage)

   // usando POST no method do form
   .post('/save-orphanage', pages.saveOrphanage)

// ligar server
server.listen(5500);
const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

server.set('view engine', 'njk');
server.use(express.static('public'));

nunjucks.configure('views', {
  express: server
})

server.get('/', (req, res) => {
  res.render('home');
})

server.get('/courses', (req, res) => {
  res.render('courses');
})

server.get('/about', (req, res) => {
  res.render('about');
})

server.use((req, res) => {
  res.status(404).render('not-found');
});

server.listen(3333, (req, res) => {
  console.log('Server is running');
});
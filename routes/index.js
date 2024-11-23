const express = require('express');
const router = express.Router();

let globalAccessCounter = 0; // Contador global

router.get('/', (req, res) => {
  if (!req.session.user) req.session.user = { name: '', tasks: [], userCounter: 0 };

  req.session.user.userCounter++; // Incrementa o contador do usuário
  globalAccessCounter++; // Incrementa o contador global

  res.render('index', {
    name: req.session.user.name || '',
    userCounter: req.session.user.userCounter,
    globalCounter: globalAccessCounter,
  });
});

router.post('/salvauser', (req, res) => {
  req.session.user.name = req.body.name; // Salva o nome do usuário na sessão
  res.redirect('/');
});

router.get('/random', (req, res) => {
  if (!req.cookies.randomNumber) {
    const randomNumber = Math.floor(Math.random() * 100);
    res.cookie('randomNumber', randomNumber);
    res.send(`Número aleatório gerado: ${randomNumber}`);
  } else {
    res.send(`Número salvo no cookie: ${req.cookies.randomNumber}`);
  }
});

router.post('/tasks', (req, res) => {
  const { task } = req.body;
  const user = req.session.user;

  if (user && user.name) {
    user.tasks.push(task); // Adiciona a tarefa ao usuário logado
    res.redirect('/');
  } else {
    res.send('Apenas usuários logados podem adicionar tarefas.');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;

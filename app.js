

const express = require('express');
const app = express();
const port = 3000;

// Rota para servir a página HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Iniciar o servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor está rodando em http://localhost:3000`);
});
module.exports = app;

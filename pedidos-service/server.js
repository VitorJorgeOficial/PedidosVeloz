const express = require('express');
const app = express();

app.use(express.json());

app.get('/pedidos', (req, res) => {
  res.json([{ id: 1, produto: 'Notebook' }]);
});

app.post('/pedidos', (req, res) => {
  res.json({ message: 'Pedido criado com sucesso' });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(3001, () => {
  console.log('Pedidos Service na porta 3001');
});
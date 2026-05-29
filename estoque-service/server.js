const express = require('express');

const app = express();

app.use(express.json());

app.get('/estoque', (req, res) => {
  res.json([
    {
      produto: 'Notebook',
      quantidade: 20
    }
  ]);
});

app.listen(3003, () => {
  console.log('Estoque Service na porta 3003');
});
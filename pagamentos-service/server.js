const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Serviço de pagamentos online');
});

app.get('/pagamentos', (req, res) => {
  res.json([
    {
      id: 1,
      status: 'Pagamento aprovado',
      valor: 1500
    }
  ]);
});

app.listen(3002, () => {
  console.log('Pagamento Service na porta 3002');
});
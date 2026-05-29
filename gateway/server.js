const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Gateway funcionando' });
});

app.listen(8080, () => {
  console.log('Gateway na porta 8080');
});
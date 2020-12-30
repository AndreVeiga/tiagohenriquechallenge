const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) =>
  res.send(express.static(resolve(__dirname, './build'))));

app.listen(PORT, (err) => {
  if(err){
    return console.log(err);
  }

  return console.log(`Servidor rodando na porta ${PORT}`);
});

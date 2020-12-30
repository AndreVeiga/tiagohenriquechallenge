const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use('/', () => resolve(__dirname, './build'));

app.use('/favicon.ico', (req, res) => res.send());

app.listen(PORT, (err) => {
  if(err){
    return console.log(err);
  }

  return console.log(`Servidor rodando na porta ${PORT}`);
});

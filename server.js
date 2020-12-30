const express = require('express');
const { resolve } = require('path')
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', () => resolve(__dirname, './build'));

app.listen(PORT, (err) => {
  if(err){
    return console.log(err);
  }

  return console.log(`Servidor rodando na porta ${PORT}`);
});

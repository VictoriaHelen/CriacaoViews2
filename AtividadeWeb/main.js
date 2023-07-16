const express = require('express');
const app = express();
const routes = require('./routes/rota');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);
app.use(express.static('./views'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

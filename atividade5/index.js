const express = require('express');
const mustacheExpress = require('mustache-express');
const router = require('./routers/agendamentoRouter');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/', router);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
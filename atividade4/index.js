const express = require('express');
const estoque = require('./estoque');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    let html =  '<h1>🧾 Sistema de Estoque</h1>';
    html     += '<h3>Rotas disponíveis:</h3>';
    html     += '<ul>';
    html     += '<li>/adicionar/:id/:nome/:qtd</li>';
    html     += '<li>/listar</li>';
    html     += '<li>/remover/:id</li>';
    html     += '<li>/editar/:id/:qtd</li>';
    html     += '</ul>';
    res.send(html);
});

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const item = {
        id: req.params.id.trim(),
        nome: req.params.nome.trim(),
        qtd: parseInt(req.params.qtd)
    };

    const resultado = estoque.adicionar(item);
    res.send(resultado);
});

app.get('/listar', (req, res) => {
    res.json({
        total: estoque.listar().length,
        produtos: estoque.listar()
    });
});

app.get('/remover/:id', (req, res) => {
    const resultado = estoque.remover(req.params.id.trim());
    res.send(resultado);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const id = req.params.id.trim();
    const qtd = parseInt(req.params.qtd);

    const resultado = estoque.editar(id, qtd);
    res.send(resultado);
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${port}`);
});
const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

let estoque = [];

const encontrarProduto = (id) => estoque.find(p => p.id === id);

const removerProduto = (id) => {
    const index = estoque.findIndex(p => p.id === id);
    if (index !== -1) {
        estoque.splice(index, 1);
        return true;
    }
    return false;
};

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    if (encontrarProduto(id)) {
        return res.send(`❌ Produto com ID '${id}' já existe.`);
    }

    const quantidade = parseInt(qtd);
    if (isNaN(quantidade) || quantidade < 0) {
        return res.send('❌ Quantidade inválida.');
    }

    estoque.push({
        id: id.trim(),
        nome: nome.trim(),
        qtd: quantidade
    });

    res.send(`✅ Produto '${nome}' (ID: ${id}) adicionado com ${quantidade} unidades.`);
});

app.get('/listar', (req, res) => {
    res.json({
        total: estoque.length,
        produtos: estoque
    });
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;

    if (removerProduto(id)) {
        res.send(`✅ Produto com ID '${id}' removido com sucesso.`);
    } else {
        res.send(`❌ Produto com ID '${id}' não encontrado.`);
    }
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const quantidade = parseInt(qtd);

    if (isNaN(quantidade) || quantidade < 0) {
        return res.send('❌ Quantidade inválida.');
    }

    const produto = encontrarProduto(id);
    if (produto) {
        produto.qtd = quantidade;
        res.send(`✅ Quantidade do produto '${produto.nome}' (ID: ${id}) atualizada para ${quantidade}.`);
    } else {
        res.send(`❌ Produto com ID '${id}' não encontrado.`);
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${port}`);
});
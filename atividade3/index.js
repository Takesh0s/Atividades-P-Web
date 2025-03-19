const express = require('express');
const calculadora = require('./calculadora');

const app = express();

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.send(`Resultado: ${calculadora.somar(Number(a), Number(b))}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.send(`Resultado: ${calculadora.subtrair(Number(a), Number(b))}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.send(`Resultado: ${calculadora.multiplicar(Number(a), Number(b))}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    res.send(`Resultado: ${calculadora.dividir(Number(a), Number(b))}`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
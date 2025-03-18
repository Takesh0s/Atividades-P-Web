const calc = require('./calculadora');
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello/world!');
});

app.get('/salve', (req, res)=>(
    res.send('El lobo cuida a su loba')
));

app.get('/diddy', (req, res)=>(
    res.send(`P.Diddy está atrás de ${req.params.nome}!`)
));

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
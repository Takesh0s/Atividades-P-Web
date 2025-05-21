function getIndexView(req, res) {
    res.render('index.html');
}

function postAgendarConsulta(req, res) {
    let dados_consulta = req.body;
    let campos_invalidos = validarRequisicaoAgendamentoConsulta(dados_consulta);
    res.render('index.html', { campos_invalidos, dados_consulta });
}

const moment = require('moment');

function validarRequisicaoAgendamentoConsulta(dados_consulta) {
    let campos_invalidos = [];

    if (dados_consulta.nome.length == 0) {
        campos_invalidos.push("Nome");
    }
    if (dados_consulta.sobrenome.length == 0) {
        campos_invalidos.push("Sobrenome");
    }
    if (dados_consulta.cpf.length == 0) {
        campos_invalidos.push("CPF");
    }

    return campos_invalidos;
}

module.exports = {
    getIndexView,
    postAgendarConsulta
};
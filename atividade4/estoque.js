let itens = [];

function adicionar(item) {
    if (!validarItem(item)) {
        return '❌ Dados inválidos ou produto já existe.';
    }

    itens.push(item);
    return `✅ Produto '${item.nome}' (ID: ${item.id}) adicionado com ${item.qtd} unidades.`;
}

function listar() {
    return itens;
}

function remover(id) {
    const index = itens.findIndex(item => item.id === id);
    if (index !== -1) {
        itens.splice(index, 1);
        return `✅ Produto com ID '${id}' removido com sucesso.`;
    }
    return `❌ Produto com ID '${id}' não encontrado.`;
}

function editar(id, qtd) {
    if (!isNumerico(qtd) || qtd < 0) {
        return '❌ Quantidade inválida.';
    }

    const item = itens.find(item => item.id === id);
    if (item) {
        item.qtd = qtd;
        return `✅ Quantidade do produto '${item.nome}' (ID: ${id}) atualizada para ${qtd}.`;
    }
    return `❌ Produto com ID '${id}' não encontrado.`;
}

function validarItem(item) {
    return (
        isNumerico(item.qtd) &&
        item.qtd >= 0 &&
        item.id &&
        item.nome &&
        !itens.find(i => i.id === item.id)
    );
}

function isNumerico(n) {
    return !isNaN(n) && n !== null;
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar
};
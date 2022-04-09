
function calculeFreteEntrega(cepCliente, cepEmpresa) {
    // algoritmo
    // pegue a distancia de um cep para o outro
    var distancia = calcularDistancia(cepEmpresa, cepCliente);
    var valorFrete = calcularValorFrete(distancia);

    return valorFrete;
}

function calcularDistancia(cepOrigem, cepDestino) {
    var distanciaCalculada = calculeDistanciaFake(cepOrigem, cepDestino);
    return distanciaCalculada;
}

function calcularValorFrete(distancia) {
    const valorPorMetro = 0.01;
    var valorFrete = distancia * valorPorMetro;
    return valorFrete;
}

function calculeDistanciaFake(cepOrigem, cepDestino) {
    // simula que calcula o frete entre dois cep
    // sempre vai retornar um valor aleatório
    // mesmo que os ceps que chame a função sejam os mesmos
    return Math.random() * (3000 - 3000) + 3000;
}

module.exports = { calculeFreteEntrega };
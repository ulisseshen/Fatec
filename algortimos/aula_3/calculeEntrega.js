
function calculeFreteEntrega(cepCliente, cepEmpresa) {
    // algoritmo
    // pegue a distancia de um cep para o outro
    var distancia = calcularDistancia(cepCliente, cepEmpresa);
    var valorFrete = calcularValorFrete(distancia);

    return valorFrete;
}

function calcularDistancia(cepOrigem, cepDestino) {
    var distancia = calculeDistanciaFake(cepOrigem, cepDestino);
    return distancia;
}

function calcularValorFrete(distancia) {
    // mais 70 linhas
    var valorPorMetro = 0.05;
    var valorFrete = distancia * valorPorMetro;

    return valorFrete;
}

function calculeDistanciaFake(cepOrigem, cepDestino) {
    // simula que calcula o frete entre dois cep
    // sempre vai retornar um valor aleatório
    // mesmo que os ceps que chame a função sejam os mesmos
    return Math.random() * (3000 - 500) + 500;
}

module.exports = { calculeFreteEntrega };
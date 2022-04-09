
function calculeFreteEntrega(cepCliente, cepEmpresa) {
    // algoritmo
    // pegue a distancia de um cep para o outro
    var distancia = calculeDistanciaFake(cepEmpresa, cepCliente);
    var valorFrete = calcularValorFrete(distancia);

    return valorFrete;
}

function calculeDistanciaFake(cepOrigem, cepDestino) {
    // retornando sempre 3k até ser implementado
    var distanciaFake = 3000;
    return distanciaFake;
}

function calcularValorFrete(distancia) {
    const valorPorMetro = 0.01;
    var valorFrete = distancia * valorPorMetro;
    return valorFrete;
}


module.exports = { calculeFreteEntrega };
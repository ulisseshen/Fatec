
function calculeFreteEntrega(cepCliente, cepEmpresa){
    // algoritmo
    // pegue a distancia de um cep para o outro
     var distanciaEmMetros = calcularDistancia(cepCliente, cepEmpresa);
     var valorFrete = calcularValorFrete(distanciaEmMetros);

    return valorFrete;
}

function calcularDistancia(cepOrigem, cepDestino){
    //algoritmo para calcular distancia
    var distancia = 1500;
     return distancia;
}

function calcularValorFrete(distancia){
    // mais 70 linhas
    var valorFrete = distancia * 0.05;
    return valorFrete;
}
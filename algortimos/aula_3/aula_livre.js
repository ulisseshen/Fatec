// Precisamos que seja desenvolvida
// uma funcionalidade que calcule o frete da entrega.
// pela distancia dada em metros.
// calcule apenas de um cep para o outro.

// cep da empresa até o cep do cliente;

//Empresa: Ifood

//escreval("ola")
//calculeFreteEntrega("12345-678", "68712-324") => 50,00


function calculeFreteEntrega(cepCliente, cepEmpresa){
    //algoritmo
    // pegue a distancia de um cep para o outro
    var distanciaEmMetros = calcularDistancia(cepCliente, cepEmpresa);
    var valorFrete = calcularValorFrete(distanciaEmMetros);

    return valorFrete;
}

function calcularDistancia(cepOrigem, cepDestino){
    // TODO algoritmo para obter a distancia entre os ceps

    return 1500; //metros
}

function calcularValorFrete(distancia){
    return distancia * 0.05;
}
    

//Exemplo de funções
function leia(/* sem parametros */){
    //compacta o algoritmo de ler a informação 
    //que foi digitada pelo o usuario na tela
}

function escreval(texto /* parametros da função */){

}
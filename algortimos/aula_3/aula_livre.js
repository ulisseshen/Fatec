// Precisamos que seja desenvolvida
// uma funcionalidade que calcule o frete da entrega.
// pela distancia dada em metros.
// calcule apenas de um cep para o outro.

// Ex: cep da empresa até o cep do cliente;

//Empresa: Ifood

const calculo = require('./calculeEntrega');
const log = require('./log')

// eu preciso pegar a string e atribuir-la à variavel
var cepCliente = "12345-678"; 
var cepEmpresa = "68712-324";
var valorFrete = calculo.calculeFreteEntrega(cepCliente, cepEmpresa);
log.logarMensagem("O valor do frete é: " + valorFrete);


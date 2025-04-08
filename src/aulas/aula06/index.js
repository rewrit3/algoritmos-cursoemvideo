// situação 1: aniversário
// var anoAtual = prompt('Em que ano nós estamos?');
// var anoNascimento = prompt('Em que ano eu nasci?');
// var idade: number;

// idade = anoAtual - anoNascimento;
// alert('Sua idade é: ' + idade);

// situação 2: viagem
// var cotacaoDolar = 0.1777;
// var valorReais = parseFloat(prompt('Quantos reais eu tenho?'));

// var valorDolares = cotacaoDolar * valorReais;
// alert('Você pode ter $' + valorDolares + ' dólares.');

// situação 3: temperatura
// let temperaturaF = prompt('Qual é a temperatura aqui?');
// let temperaturaC = (temperaturaF - 32) / 1.8;

// console.log('No Brasil estaria ' + temperaturaC + 'ºC.');

// situação 4: muamba
// let valorMercadoriasDolar = parseFloat(prompt('Qual o valor pago nas mercadorias em dolar?'));
// let valorMercadoriasImposto = (valorMercadoriasDolar * 60) / 100;
// let valorMercadoriasFinal = valorMercadoriasDolar + valorMercadoriasImposto;

// console.log('O valor final das mercadorias com imposto é: R$' + valorMercadoriasFinal + '.');

// situação 5: empréstimo
let valorEmprestimo = parseFloat(prompt('Qual o valor do empréstimo?'));
let quantidadeParcelas = parseInt(prompt('Quantas parcelas?'));
let valorJuros = (valorEmprestimo * 20) / 100;
let valorParcelas = (valorEmprestimo + valorJuros) / quantidadeParcelas;

console.log('O valor do juros é: R$' + valorJuros);
console.log('O pagamento ficou em ' + quantidadeParcelas + ' parcelas de: R$' + valorParcelas);

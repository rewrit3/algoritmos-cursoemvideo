// funções
// soma
// function soma(numero1, numero2) {
//   let resultado = numero1 + numero2;

//   return console.log('A soma de ' + numero1 + ' + ' + numero2 + ' é: ' + resultado);  
// }

// let numero1 = parseInt(prompt('Digite o primeiro número: '));
// let numero2 = parseInt(prompt('Digite o segundo número: '));

// soma(numero1, numero2);

// par ou impar
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return console.log('O número escolhido é par.');
  } else {
    return console.log('O número escolhido é impar.');
  }
}

let numero = parseInt(prompt('Digite um número: '));
parOuImpar(numero);
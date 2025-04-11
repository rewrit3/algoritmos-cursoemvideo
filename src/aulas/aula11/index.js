// exercício 1: sequência de fibonacci
// console.log('--------');
// console.log('INICIANDO SEQUÊNCIA DE FIBONACCI');
// console.log('--------');

// function fibonacci(n) {
//   const sequencia = [0, 1];

//   console.log(sequencia);  

//   for (let i = 2; i < n; i++) {
//     sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
//   }

//   return sequencia.slice(0, n);
// }

// console.log(fibonacci(10));

// exercício 1: analisador de valores
console.log('--------');
console.log('INICIANDO ANALISADOR DE VALORES');
console.log('--------');

function contarDivisiveisPor5Array(valores) {
  let contador = 0;

  for (const valor of valores) {
    if (valor % 5 === 0) {
      contador++;
    }
  }

  return contador;
}

function contarNulosArray(valores) {
  let contador = 0;

  for (const valor of valores) {
    if (valor === null) {
      contador++;
    }
  }

  return contador;
}

const valor1 = parseInt(prompt('Digite o 1º valor: '));
const valor2 = parseInt(prompt('Digite o 2º valor: '));
const valor3 = parseInt(prompt('Digite o 3º valor: '));
const valor4 = parseInt(prompt('Digite o 4º valor: '));
const valor5 = parseInt(prompt('Digite o 5º valor: '));

const soma = valor1 + valor2 + valor3 + valor4 + valor5;

const media = (valor1 + valor2 + valor3 + valor4 + valor5) / 5;

const valoresDivisiveis = [valor1, valor2, valor3, valor4, valor5];
const quantidadeDivisiveis = contarDivisiveisPor5Array(valoresDivisiveis);

const valoresNulos = [valor1, valor2, valor3, valor4, valor5];
const quantidadeNulos = contarDivisiveisPor5Array(valoresNulos);

console.log('A soma entre os valores é: ' + soma);
console.log('A média entre os valores é: ' + media);
console.log('A quantidade de valores divisiveis por 5 é: ' + quantidadeDivisiveis);
console.log('A quantidade de valores nulos é: ' + quantidadeNulos);
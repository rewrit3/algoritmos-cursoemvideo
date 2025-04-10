// exercício 1: contagem inteligente
let inicio = parseInt(prompt('Início: '));
let fim = parseInt(prompt('Fim: '));

if (inicio < fim) {
  console.log('--------');
  console.log('INICIANDO CONTAGEM PROGRESSIVA');
  console.log('--------');
  
  let i = inicio - 1;
  do {
    i = i + 1;

    console.log(i + '..');
  } while (i < fim);
} else if (inicio > fim) {
  console.log('--------');
  console.log('INICIANDO CONTAGEM REGRESSIVA');
  console.log('--------');

  let i = inicio + 1;
  do {
    i = i - 1;

    console.log(i + '..');
  } while (i > fim);
}

console.log('--------');
console.log('FINALIZANDO CONTAGEM');
console.log('--------');
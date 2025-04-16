// vetores
// const numeros = [];

// for (let i = 0; i < 4; i++) {
//   numeros[i] = i;
// }

// console.log(numeros);

// prática 1: ler 7 valores, mostrar quantos são pares
// const valores = [];

// for (let i = 1; i < 8; i++) {
//   valores[i] = parseInt(prompt('Digite o ' + i + 'º valor: '));
// }

// const valoresPares = valores.filter((valor) => (valor % 2 === 0));

// console.log(valoresPares);

// prática 1: listagem de notas da turma
const nomesAlunos = [];
const notas1 = [];
const notas2 = [];
const mediasAlunos = [];
let mediasSoma = 0;
let mediaTurma = 0;
let alunosAcimaMedia = 0;

for (let i = 1; i < 4; i++) {
  nomesAlunos[i] = prompt('Digite o nome do ' + i + 'º aluno: ');
  notas1[i] = parseFloat(prompt('Digite a primeira nota do ' + i + 'º aluno: '));
  notas2[i] = parseFloat(prompt('Digite a segunda nota do ' + i + 'º aluno: '));
  mediasAlunos[i] = (notas1[i] + notas2[i]) / 2;
  mediasSoma = mediasSoma + mediasAlunos[i];
}

mediaTurma = mediasSoma / 3;

console.log('----------------');
console.log('LISTAGEM DE ALUNOS');
console.log('----------------');

for (let i = 1; i < 4; i++) {
  if (mediasAlunos[i] > mediaTurma) {
    alunosAcimaMedia = alunosAcimaMedia + 1;
  }

  console.log(nomesAlunos[i] + ': ' + mediasAlunos[i] + '\n');
}

console.log('----------------');
console.log('MÉDIA DA TURMA');
console.log('----------------');
console.log('A média total da turma é: ' + mediaTurma);
console.log('Total de alunos acima da média da turma: ' + alunosAcimaMedia);
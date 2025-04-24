<?php

// exercício 2: corrigindo provas
echo '--------------------------------------------------' . '\\n';
echo 'PASSO 1: CADASTRO DE GABARITO' . '\\n';
echo '--------------------------------------------------' . '\\n';

$gabarito = [];
$questoes = [];

for ($i = 1; $i < 4; $i++):
  $respostasGabarito = readline('Gabarito - Questão ' . $i . ' : ');

// gabarito.push(respostasGabarito);
endfor;

echo '<pre>';
var_dump($respostasGabarito);
echo '</pre>';

// for (let i = 1; i < 3; i++) {
//   console.log(' ------------------------------');
  // console.log('ALUNO ' + i);
//   console.log(' ------------------------------');

  // const nomeAluno=prompt('Aluno ' + i + ' - Nome: ');
//   questoes.push(nomeAluno);

//   for (let j = 1; j < 4; j++) {
//     const respostasAluno = prompt(' Aluno ' + i + ' - Questão ' + j + ' : ');

//     questoes.push(respostasAluno);
//   }
// }

// console.log(gabarito);
// console.log(questoes);
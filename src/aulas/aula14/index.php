<?php

// exercício 2: corrigindo provas
function clearConsole() {
  echo "\033[2J\033[;H";
}

// passo 1: gabarito
clearConsole();
echo ("-----------------------------\n");
echo ("PASSO 1: CADASTRO DE GABARITO\n");
echo ("-----------------------------\n");

$gabarito = [];

for ($i = 1; $i <= 2; $i++):
  $resposta = strtoupper(readline('Gabarito - Questão ' . $i . ' : '));

  $gabarito[$i] = trim($resposta);
endfor;

echo "\nGabarito cadastrado com sucesso!\n";
sleep(1);

// passo 2: respostas
clearConsole();
echo ("-----------------------------\n");
echo ("PASSO 2: CADASTRO DE RESPOSTAS\n");
echo ("-----------------------------\n");

$alunos = [];
for ($j = 1; $j <= 2; $j++):
  $nome = trim(readline("Aluno " . $j . " - Nome:\n"));
  $respostas = [];

  for ($k = 1; $k <= 2; $k++):
    $resposta = strtoupper(readline("Aluno - Questão " . $j . " : "));

    $respostas[$k] = trim($resposta);
  endfor;

  $alunos[$nome] = $respostas;

  echo "\nRespostas de $nome cadastradas.\n";
  sleep(1);
endfor;

echo "\nRespostas dos alunos cadastradas!\n";
sleep(1);

// passo 2: corrigir
clearConsole();
echo ("-----------------------------\n");
echo ("PASSO 3: CORREÇÃO DAS PROVAS\n");
echo ("-----------------------------\n");

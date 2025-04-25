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

// passo 3: corrigir
clearConsole();
echo ("-----------------------------\n");
echo ("PASSO 3: CORREÇÃO DAS PROVAS\n");
echo ("-----------------------------\n");

$notas = [];
foreach ($alunos as $aluno => $respostas):
  $nota = 0;

  echo "\nCorrigindo a prova de $aluno:\n";

  for ($questao = 1; $questao <= 2; $questao++):
    if (isset($respostas[$questao]) and isset($gabarito[$questao])):
      if ($respostas[$questao] === $gabarito[$questao]):
        $nota++;

        echo "  Questão $questao: Correta (Resposta: " . $respostas[$questao] . ")\n";
      else:
        echo "  Questão $questao: Incorreta (Sua resposta: " . $respostas[$questao] . ", Gabarito: " . $gabarito[$questao] . ")\n";
      endif;
    else:
      echo "  Questão $questao: Resposta não encontrada.\n";
    endif;
  endfor;

  $notas[$aluno] = $nota;

  echo "Nota final de $aluno: $nota/2\n";
  sleep(1);
endforeach;

// passo 4: notas
// clearConsole();
echo ("-----------------------------\n");
echo ("PASSO 4: NOTAS FINAIS\n");
echo ("-----------------------------\n");

foreach ($notas as $aluno => $nota):
  echo "$nome: $nota/2\n";
endforeach;

echo "-----------------------------------------\n";

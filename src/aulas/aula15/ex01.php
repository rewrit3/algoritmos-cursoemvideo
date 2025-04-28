<?php

// exercício 1: corrigindo provas
function clearConsole() {
  echo "\033[2J\033[;H";
}

// passo 1: gabarito
clearConsole();
echo ("-----------------------------\n");
echo ("MATRIZ\n");
echo ("-----------------------------\n");

$matriz = [];
$numLinhas = 2;
$numColunas = 2;

for ($linha = 1; $linha <= $numLinhas; $linha++):
  $matriz[$linha] = [];

  for ($coluna = 1; $coluna <= $numColunas; $coluna++):
    $indice = "[" . $linha . "][" . $coluna . "]";
    $valor = readline("Valor para o índice $indice: ");

    $matriz[$coluna][$linha] = trim($valor);
  endfor;

// echo "Linha " . ($linha + 1) . " preenchida.\n";
endfor;

print_r($matriz);

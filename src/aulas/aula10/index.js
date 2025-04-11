// exercício 1: super contador
let escolha = parseInt(prompt('[1] 1..10, [2] 10..1, [3] Sair'));

switch (escolha) {
  case 1:
    console.log('--------');
    console.log('INICIANDO CONTAGEM DE 1..10');
    console.log('--------');

    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }

    console.log('--------');
    console.log('FINALIZANDO CONTAGEM');
    console.log('--------');

    break;
  case 2:
    console.log('--------');
    console.log('INICIANDO CONTAGEM DE 10..1');
    console.log('--------');

    for (let i = 10; i >= 1; i--) {
      console.log(i);
    }

    console.log('--------');
    console.log('FINALIZANDO CONTAGEM');
    console.log('--------');
    
    break;
  case 3:
    break;
}


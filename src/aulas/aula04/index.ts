// var A: number = 2;
// var B: number = 3;
// var C: number = 5;

// operadores relacionais
// console.log(A > B);
// console.log(A < B);
// console.log(A == B);
// console.log(A != B);
// console.log(A > 2);
// console.log(A >= 2);
// console.log(C == A + B);
// console.log((B ^ A) <= C);

// operadores lógicos
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log((A == B) || (C > A));
// console.log(!((A == B) || (C > A)));

// exercício: triangulo
var lado1: number = 3;
var lado2: number = 2;
var lado3: number = 1;
var equilatero: boolean;
var escaleno: boolean;

if ((lado1 === lado2) && (lado2 === lado3)) {
  equilatero = true;
  escaleno = false;
} else if ((lado1 !== lado2) && (lado2 !== lado3) && (lado1 !== lado3)) {
  equilatero = false;
  escaleno = true;
}

console.log('O triângulo é equilátero: ' + equilatero);
console.log('O triângulo é escaleno: ' + escaleno);

var firstNumber: number | null = 10;
var secondNumber: number | null = 20;
var result: number | null;
var average: number | null;

result = firstNumber + secondNumber;
console.log(
  "O resultado da soma entre " +
    firstNumber +
    " e " +
    secondNumber +
    " é: " +
    result
);

average = (firstNumber + secondNumber) / 2;
console.log(
  "A média entre " + firstNumber + " e " + secondNumber + " é: " + average
);

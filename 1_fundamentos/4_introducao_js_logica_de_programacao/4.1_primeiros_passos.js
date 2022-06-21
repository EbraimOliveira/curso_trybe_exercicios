//operadores aritméticos//

const a = 5;
const b = 8;

let soma = a + b;
let subtração = a - b;
let mutiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(soma, subtração, mutiplicacao, divisao, modulo);

//Operadores de comparação//
//Faça um programa que retorne o maior de três números//

const a = 5;
const b = 8;
const c = 3;

if (a > b && a > c) {
  console.log(a);
}
if (c > b && c > a) {
  console.log(c);
}
if (a < b && c < b) {
  console.log(b);
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negativo" se for negativo e "zero" caso contrário//

const a = 0;

if (a < 0) {
  console.log("positivo");
}
if (a === 0) {
  console.log("zero");
} else {
  console.log("negativo");
}

//🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro//

const anguloA = 30;
const anguloB = 100;
const anguloC = 50;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
  console.log("erro");
} else if (anguloA + anguloB + anguloC === 180) {
  console.log(true);
} else {
  console.log(false);
}

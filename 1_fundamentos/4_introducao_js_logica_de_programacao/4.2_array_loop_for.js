//Array será usado para os exercícios 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log().

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
console.log(soma);

//3 -Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}
media = soma / numbers.length;
console.log(media);

//4 -Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20".

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
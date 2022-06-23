//1 -Fatorial.

const valor = 10;
let valorFatorado = valor;

for (let index = valor - 1; index >= 2; index -= 1) {
  valorFatorado = valorFatorado * index;
}
console.log(valorFatorado);

//2 -Inverte palavra.

let palavra = "Kakaroto";
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i -= 1) {
  palavraInvertida += palavra[i];
}
console.log(palavraInvertida);

//3 -Retora a maior e a menor.

let array = ["java", "javascript", "python", "html", "css"];
let maior = array[0];

for (let i = 1; i < array.length; i += 1) {
  if (maior.length < array[i].length) {
    maior = array[i];
  }
}
console.log(maior);

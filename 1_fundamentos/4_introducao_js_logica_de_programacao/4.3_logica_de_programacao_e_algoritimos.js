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

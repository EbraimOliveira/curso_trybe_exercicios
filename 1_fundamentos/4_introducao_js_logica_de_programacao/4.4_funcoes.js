//REVERSE = inverte a ordem dos elementos de um array mas NÃO cria um novo array.
// let array = [7, "ana", -0.5, "ultima"];
// let arrayIvertido = array.reverse();
// arrayIvertido = ["ultima", -0.5, "ana", 7];

//SPLIT = transforma string em array.
// let string = "chevete";
// let array = string.split("");
// array = ["c", "h", "e", "v", "e", "t", "e"];

//1 -Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

//Resolução 01:

function ehPalindromo(string) {
  let array = string.split("");
  // console.log(string);
  // console.log(array);
  let arrayInverso = array.reverse();
  // console.log(arrayInverso);
  if (array === arrayInverso) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
}
console.log(ehPalindromo("ana"));

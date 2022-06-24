//Testes próprios:

// let objetoTeste = {
//   nome: "Ebraim",
//   ultimoNome: "Oliveira",
//   idade: 35,
//   gostaDe: {
//     esporte: "climb",
//     mulher: "loira",
//     3: "numero",
//   },
// };

// // console.log(objetoTeste.nome, objetoTeste["idade"], objetoTeste.gostaDeClimb);

// // objetoTeste["nomeCompleto"] =
// //   objetoTeste.nome + " " + objetoTeste["ultimoNome"];

// // console.log(objetoTeste["nomeCompleto"]);

// console.log(objetoTeste["gostaDe"]["3"]);

// ------------------------------------------------------------------------------------------------

// Para fixar:

// let name = "Marta";
// let lastName = "Silva";
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: {
    years: [2006, 2007, 2008, 2009, 2010, 2018],
  },
};

console.log(
  "A jogadora" +
    " " +
    player["name"] +
    " " +
    player.lastName +
    " " +
    "tem" +
    " " +
    player["age"] +
    " " +
    "de" +
    " " +
    "idade" +
    " " +
    "foi" +
    " " +
    "a" +
    " " +
    "melhor" +
    " " +
    "nos" +
    " " +
    "anos" +
    " " +
    player.bestInTheWorld["years"] +
    " " +
    "e" +
    " " +
    "ganhou" +
    " " +
    player["medals"].golden +
    " " +
    "medalhas" +
    " " +
    "de" +
    " " +
    "ouro"
);

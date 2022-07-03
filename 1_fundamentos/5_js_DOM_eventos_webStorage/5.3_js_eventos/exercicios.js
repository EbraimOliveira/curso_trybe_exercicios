function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

//Variáveis:

// Escreva seu código abaixo.

// 🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const diasDeDezembro = document.getElementById("days");

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const umDia = document.createElement("li");
  if (
    decemberDaysList[index] === 24 ||
    decemberDaysList[index] === 25 ||
    decemberDaysList[index] === 31
  ) {
    umDia.classList.add("holiday");
  }
  if (
    decemberDaysList[index] === 4 ||
    decemberDaysList[index] === 11 ||
    decemberDaysList[index] === 18 ||
    decemberDaysList[index] === 25
  ) {
    umDia.classList.add("friday");
  }

  umDia.classList.add("day");

  umDia.innerText = decemberDaysList[index];
  diasDeDezembro.appendChild(umDia);
}

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function criaBotao(nomeDoBotao, idDoBotao) {
  const novoBotao = document.createElement("button");
  novoBotao.innerText = nomeDoBotao;
  novoBotao.id = idDoBotao;
  const divDosBotoes = document.getElementsByClassName("buttons-container")[0];
  divDosBotoes.appendChild(novoBotao);
}
criaBotao("feriado", "btn-holiday");

// const botaoFeriado = document.getElementById("btn-holiday");
// const divDosBotoes = document.getElementsByClassName("buttons-container")[0];
// divDosBotoes.appendChild(novoBotao);
// *** Não é possivel apendar o elemento criado fora da função porque o que foi definido dentro da função só existe enquanto a função esta sendo execultada

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

const diasDeFeriado = document.getElementsByClassName("holiday");

function mudaCor() {
  for (let index = 0; index < diasDeFeriado.length; index += 1) {
    if (diasDeFeriado[index].style.backgroundColor === "yellow") {
      diasDeFeriado[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      diasDeFeriado[index].style.backgroundColor = "yellow";
    }
  }
}

const botaoDoFeriado = document.getElementById("btn-holiday");
botaoDoFeriado.addEventListener("click", mudaCor);

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

criaBotao("Sexta-feira", "btn-friday");
const botaoSextouEstudando = document.getElementById("btn-friday");

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

const sextasFeiras = document.getElementsByClassName("friday");
const soTextos = [];
for (let i = 0; i < sextasFeiras.length; i += 1) {
  soTextos.push(sextasFeiras[i].innerText);
}
console.log(soTextos);

//console.log(sextasFeiras);

function mudaTexto() {
  for (index = 0; index < soTextos.length; index += 1) {
    const teste = sextasFeiras;
    // [4, 11, 25 , 31]

    if (teste[index].innerText !== "Estudar") {
      teste[index].innerText = "Estudar";
    } else {
      teste[index].innerText = soTextos[index];
    }
  }
}
botaoSextouEstudando.addEventListener("click", mudaTexto);

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

const arrayDeDias = diasDeDezembro.children;
//console.log(document.getElementsByClassName("day"));

for (let i = 0; i < arrayDeDias.length; i += 1) {
  arrayDeDias[i].addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "2em";
  });
  arrayDeDias[i].addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "";
  });
}

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function criaTarefa(descricaoDaTarefa) {
  const tarefa = document.createElement("span");
  tarefa.innerText = descricaoDaTarefa;
  const paiDaTarefa = document.querySelector(".my-tasks");
  paiDaTarefa.appendChild(tarefa);
}
criaTarefa("entao funcionou");

// 🚀 Exercício 8:
// *Implemente uma função que adicione uma legenda com cor para a tarefa.
// *Essa função deverá receber como parâmetro uma string ('cor')
// *Criar dinamicamente um elemento de tag <div> com a classe 'task'.
// *O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// *O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function adicionLegenda(cor) {
  const bolinhaColorida = document.createElement("div");
  bolinhaColorida.classList.add("task");
  bolinhaColorida.style.background = cor;
  const paiDaTarefa = document.querySelector(".my-tasks");
  paiDaTarefa.appendChild(bolinhaColorida);
}
adicionLegenda("pink");

// 🚀 Exercício 9:
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
